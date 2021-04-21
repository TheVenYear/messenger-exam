import express from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import cookieParser from 'cookie-parser';
import { createServer } from 'http';
import socket from 'socket.io';

import routes from './routes';
import config from './config';
import passSocket from './middlewares/socket.middleware';

const app = express();
const server = createServer(app);
const io = socket(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(express.json({ limit: '30mb' }));
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(cookieParser());
app.use(passSocket(io));

app.use('/api', routes);

io.on('connection', (socket) => {
  socket.on('message', (data) => {
    io.emit('message', data);
  });
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
