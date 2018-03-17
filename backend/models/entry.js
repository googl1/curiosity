import mongoose, { Schema } from 'mongoose';

// Define schema of an entry
var entrySchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  author: String,
  category: String,
  planet: int,
});

// Export Mongoose model
export default mongoose.model('entry', entrySchema);

