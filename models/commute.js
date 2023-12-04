import mongoose from 'mongoose';

const commuteSchema = new mongoose.Schema({
  title: { required: true, type: String },
  description: { required: true, type: String },
  releaseYear: { required: true, type: Number },
  genre: { required: true, type: String },
});

const Commute = mongoose.model('Commute', commuteSchema);
export default Commute;
