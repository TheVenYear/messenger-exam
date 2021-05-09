import { body } from 'express-validator';

const email = body('email')
  .exists()
  .bail()
  .notEmpty()
  .withMessage('Поле email - обязательно')
  .isEmail()
  .withMessage('Неверный email');

const password = body('password')
  .isLength({ min: 10 })
  .withMessage('Пароль должен содержать минимум 10 символов');

const phone = body('phone')
  .optional({ checkFalsy: true })
  .isString()
  .matches(
    /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/
  )
  .withMessage('Неверный телефон');

const nickname = body('nickname').optional({ checkFalsy: true }).isString();

const authValidation = {
  user: [email, password],
  updateUser: [
    email.optional({ checkFalsy: true }),
    password.optional({ checkFalsy: true }),
    phone,
    nickname,
  ],
  signUpUser: [email, password, phone, nickname],
};

export default authValidation;
