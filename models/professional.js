import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: String,
  category: String,
  location: String
});

export default mongoose.model('Professional', schema);