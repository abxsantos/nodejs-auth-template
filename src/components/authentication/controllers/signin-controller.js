import { body } from 'express-validator';
import jwt from 'jsonwebtoken';

import PasswordHasher from '../services/password-hasher';
import User from '../models/user';
import BadRequestError from '../../../errors/bad-request-error';

class SignInController {
  static get signinValidatorParameters() {
    return [
      body('email').isEmail().withMessage('Email must be valid'),
      body('password')
        .trim()
        .notEmpty()
        .withMessage('You must supply a password'),
    ];
  }

  static async signInUser(req, res) {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new BadRequestError('Invalid credentials');
    }

    const passwordsMatch = await PasswordHasher.compare(
      existingUser.password,
      password
    );
    if (!passwordsMatch) {
      throw new BadRequestError('Invalid Credentials');
    }

    // Generate JWT
    const userJwt = jwt.sign(
      {
        id: existingUser.id,
        email: existingUser.email,
      },
      process.env.JWT_KEY
    );

    // Store it on session object
    req.session = {
      jwt: userJwt,
    };

    res.status(200).send(existingUser);
  }
}

export default SignInController;
