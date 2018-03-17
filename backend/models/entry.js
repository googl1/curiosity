import mongoose, { Schema } from 'mongoose';

// Define schema of an entry
var entrySchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  author: String,
  user_tags: [String],
  tags: [String],
  img: String,
  score: { type: Number, min: 0, max: 1, default: 0 }
});

// Export Mongoose model
export default mongoose.model('entry', entrySchema);

