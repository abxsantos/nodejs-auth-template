import NotAuthorizedError from '../errors/not-authorized-error';

const requireAuth = (req, res, next) => {
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }

  next();
};

export default requireAuth;
