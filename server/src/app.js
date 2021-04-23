import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connect } from 'mongoose';
import { createServer } from 'http';
import socket from 'socket.io';

import { authenticateUser } from './middlewares/socket.middleware';
import routes from './routes';
import config from './config';

const CORS_SETTINGS = {
  origin: 'http://localhost:3000',
};

const app = express();
const server = createServer(app);
const io = socket(server, {
  cors: CORS_SETTINGS,
});

app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(express.json({ limit: '30mb' }));
app.use(cors(CORS_SETTINGS));
app.use(cookieParser());
app.set('socket', io);

app.use('/api', routes);

io.use(authenticateUser);

io.on('connection', (socket) => {
  if (!socket.user) {
    socket.emit('unauthorized');
    socket.disconnect();
    return;
  }
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
