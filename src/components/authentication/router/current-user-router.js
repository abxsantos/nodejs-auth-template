import express from 'express';
import currentUser from '../../../middlewares/current-user';
import CurrentUserController from '../controllers/current-user-controller';

const currentUserRouter = express.Router();

currentUserRouter.get(
  '/api/users/currentuser',
  currentUser,
  CurrentUserController.getCurrentUser
);

export default currentUserRouter;
