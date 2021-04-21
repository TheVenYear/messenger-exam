import { validationResult } from 'express-validator';

const validate = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({
      data: null,
      errors: errors.array().map((error) => ({ [error.param]: error.msg })),
    });
  };
};

export default validate;
