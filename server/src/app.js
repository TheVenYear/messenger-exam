import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connect } from 'mongoose';
import { createServer } from 'http';
import socket from 'socket.io';
import fileUpload from 'express-fileupload';
import path from 'path';

import { authenticateUser } from './middlewares/socket.middleware';
import routes from './routes';
import config from './config';
import corsSettings from './config/cors-settings';

const app = express();
const server = createServer(app);
const io = socket(server, {
  cors: corsSettings,
});

app.options('*', cors(corsSettings));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsSettings));
app.use(cookieParser());
app.use(fileUpload());
app.set('socket', io);

app.use('/api', routes);

if (config.NODE_ENV === 'production') {
  app.use(
    '*',
    express.static(path.resolve(__dirname, '../../client/build'), {
      index: 'index.html',
    })
  );
}
io.use(authenticateUser);

io.on('connection', (socket) => {
  if (!socket.user) {
    socket.emit('unauthorized');
    socket.disconnect();
    return;
  }
  socket.on('disconnect', () => {
    io.emit('user-leave', socket.user);
  });
  io.emit('connection', socket.user);
});

connect(config.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
  .then(() => {
    server.listen(config.PORT, () => {
      console.log(`Server is running on port ${config.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
