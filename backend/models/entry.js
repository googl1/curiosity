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
  img: {
     data: Buffer, 
     contentType: String 
  }
});

// Export Mongoose model
export default mongoose.model('entry', entrySchema);

