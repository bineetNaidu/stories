import mongoose from 'mongoose';

export const connectDb = async () => {
  if (!process.env.DATABASE_URL) {
    throw new Error('>> ENV( DATABASE_URL ) was not found! <<');
  }
  await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    keepAlive: true,
    useCreateIndex: true,
  });
  mongoose.set('debug', true);
  console.log('>>>>> MongoDB Connected <<<<<');
};
