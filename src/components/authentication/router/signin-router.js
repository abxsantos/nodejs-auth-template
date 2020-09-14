import express from 'express';
import validateRequest from '../../../middlewares/validate-request';
import SignInController from '../controllers/signin-controller';

const signinRouter = express.Router();

signinRouter.post(
  '/api/users/signin',
  SignInController.signinValidatorParameters,
  validateRequest,
  SignInController.signInUser
);

export default signinRouter;
