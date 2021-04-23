import jwt from 'jsonwebtoken';
import cookie from 'cookie';

import config from '../config';

export const authenticateUser = (socket, next) => {
  const cookies = socket.request.headers.cookie
    ? cookie.parse(socket.request.headers.cookie)
    : null;
  let user;
  try {
    user = cookies.accessToken
      ? jwt.verify(cookies.accessToken, config.ACCESS_SECRET)
      : null;
  } catch {
    user = null;
  }
  socket.user = user;
  next();
};
