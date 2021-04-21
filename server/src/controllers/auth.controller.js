import jwt from 'jsonwebtoken';
import StatusCodes from 'http-status-codes';

import config from '../config';

import authService from '../services/auth.service';

const authController = {
  signUp: async (req, res) => {
    try {
      const user = await authService.registerUser(req.body);

      return res.send({ data: user, errors: [] });
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        data: null,
        errors: [{ [error.param || global]: error.message }],
      });
    }
  },

  signIn: (refreshUrl, logoutUrl) => async (req, res) => {
    const mapUrl = (url) => {
      let urlTo = req.originalUrl.split('/');
      urlTo.pop();
      return urlTo.join('/') + url;
    };

    const refreshUrlTo = mapUrl(refreshUrl);
    const logoutUrlTo = mapUrl(logoutUrl);

    try {
      const user = await authService.loginUser(req.body);
      const refreshToken = await authService.createRefresh(user);
      const accessToken = authService.createAccess(refreshToken);
      return res
        .cookie('refreshToken', refreshToken, {
          path: refreshUrlTo,
          httpOnly: true,
        })
        .cookie('refreshToken', refreshToken, {
          path: logoutUrlTo,
          httpOnly: true,
        })
        .cookie('accessToken', accessToken, { httpOnly: true })
        .send({ data: user, errors: [] });
    } catch (error) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .send({ data: null, errors: [{ global: error.message }] });
    }
  },

  logout: async (req, res) => {
    authService.deleteRefresh(req.cookies.refreshToken);
    return res.cookie('accessToken', '').sendStatus(StatusCodes.OK);
  },

  refresh: async (req, res) => {
    try {
      const refreshToken = await authService.validateRefresh(
        req.cookies.refreshToken
      );
      const token = authService.createAccess(refreshToken);
      const user = jwt.verify(token, config.ACCESS_SECRET);
      return res
        .cookie('accessToken', token, { httpOnly: true })
        .send({ data: user || null, errors: [] });
    } catch (error) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .send({ data: null, errors: [{ global: error.message }] });
    }
  },
};

export default authController;
