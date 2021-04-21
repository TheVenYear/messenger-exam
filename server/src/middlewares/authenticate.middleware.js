import jwt, { TokenExpiredError } from 'jsonwebtoken';
import StatusCodes from 'http-status-codes';

import config from '../config';

const authenticate = (req, res, next) => {
  try {
    const { _id, email, status } = jwt.verify(
      req.cookies.accessToken,
      config.ACCESS_SECRET
    );

    req.user = { _id, email, status };
    next();
  } catch (error) {
    let message = error.message;

    if (error instanceof TokenExpiredError) {
      message = 'this page only for authorized users';
    }

    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send({ data: null, errors: [{ global: message }] });
  }
};

export default authenticate;
