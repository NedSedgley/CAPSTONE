import mongoose from 'mongoose';

const commuteSchema = new mongoose.Schema({
  traveller: { required: true, type: String },
  site: { required: true, type: String },
  direction: { required: true, type: String },
  travelType: { required: true, type: String },
  distance: { required: true, type: Number },
});

const Commute = mongoose.model('Commute', commuteSchema);
export default Commute;
