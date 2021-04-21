import { body } from 'express-validator';

const authValidation = {
  user: [
    body('email')
      .exists()
      .withMessage('email field is required')
      .bail()
      .isEmail()
      .withMessage('email is incorrect'),
    body('password')
      .isLength({ min: 10 })
      .withMessage('min password length is 10'),
  ],
};

export default authValidation;
