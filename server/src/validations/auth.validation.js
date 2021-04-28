import { body } from 'express-validator';

const authValidation = {
  user: [
    body('email')
      .exists()
      .bail()
      .notEmpty()
      .withMessage('email field is required')
      .isEmail()
      .withMessage('email is incorrect'),
    body('password')
      .isLength({ min: 10 })
      .withMessage('min password length is 10'),
  ],
};

export default authValidation;
