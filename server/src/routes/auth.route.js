import { Router } from 'express';

import authController from '../controllers/auth.controller';
import validate from '../middlewares/validate.middleware';
import authValidation from '../validations/auth.validation';

const REFRESH_URL = '/refresh';
const LOGOUT_URL = '/logout';
const authRouter = Router();

authRouter.post(
  '/sign-up',
  validate(authValidation.user),
  authController.signUp
);

authRouter.get(REFRESH_URL, authController.refresh);

authRouter.post(
  '/sign-in',
  validate(authValidation.user),
  authController.signIn(REFRESH_URL, LOGOUT_URL)
);

authRouter.post(LOGOUT_URL, authController.logout);

export default authRouter;
