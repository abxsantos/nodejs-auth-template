/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';
import PasswordHasher from '../services/password-hasher';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.pre('save', async function setPassword(done) {
  if (this.isModified('password')) {
    const hashed = await PasswordHasher.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

userSchema.statics.build = (attrs) => {
  // eslint-disable-next-line no-use-before-define
  return new User(attrs);
};

const User = mongoose.model('User', userSchema);

export default User;
