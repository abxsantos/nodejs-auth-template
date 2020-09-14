import express from 'express';
import SignOutController from '../controllers/signout-controller';

const signoutRouter = express.Router();

signoutRouter.post('/api/users/signout', SignOutController.signOutUser);

export default signoutRouter;
