import jwt from 'jsonwebtoken';

// eslint-disable-next-line consistent-return
const currentUser = (req, res, next) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY);
    req.currentUser = payload;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }

  next();
};

export default currentUser;
