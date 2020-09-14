import mongoose from 'mongoose';
import server from './server';

require('dotenv').config();

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY environment variable must be defined');
  }
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable must be defined');
  }
  if (!process.env.PORT) {
    throw new Error('PORT environment variable must be defined');
  }
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    // eslint-disable-next-line no-console
    console.log('Connected to MongoDB');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
  server.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on port ${process.env.PORT}`);
  });
};

start();
