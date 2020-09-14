import { Router } from 'express';
import validateRequest from '../../../middlewares/validate-request';
import SignUpController from '../controllers/signup-controller';

const signupRouter = Router();

signupRouter.post(
  '/api/users/signup',
  SignUpController.passwordValidationParameters,
  validateRequest,
  SignUpController.createUser
);

export default signupRouter;
