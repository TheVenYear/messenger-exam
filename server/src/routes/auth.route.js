import { Router } from 'express';

import authController from '../controllers/auth.controller';
import validate from '../middlewares/validate.middleware';
import authValidation from '../validations/auth.validation';
import authenticate from '../middlewares/authenticate.middleware';

const REFRESH_URL = '/refresh';
const LOGOUT_URL = '/logout';
const authRouter = Router();

authRouter.post(
  '/sign-up',
  validate(authValidation.signUpUser),
  authController.signUp
);

authRouter.get(REFRESH_URL, authController.refresh);

authRouter.get('/me', authenticate, authController.me);

authRouter.post(
  '/sign-in',
  validate(authValidation.user),
  authController.signIn(REFRESH_URL, LOGOUT_URL)
);

authRouter.post(
  '/change-profile',
  authenticate,
  validate(authValidation.updateUser),
  authController.changeProfile
);

authRouter.post(LOGOUT_URL, authController.logout);

export default authRouter;
