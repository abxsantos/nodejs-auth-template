import { validationResult } from 'express-validator';
import RequestValidationError from '../errors/request-validation-error';

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }

  next();
};

export default validateRequest;
