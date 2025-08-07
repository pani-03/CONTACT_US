import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  college: String,
  message: String,
}, { timestamps: true });

export default mongoose.model('Contact', contactSchema);
