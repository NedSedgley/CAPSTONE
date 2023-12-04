import mongoose from 'mongoose';

export function connectDb() {
  return mongoose.connect('mongodb://mongo:27017/lloyds-commutes');
}
