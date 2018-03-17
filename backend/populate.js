import mongoose from 'mongoose';
import Entry from './models/entry';

const entries = [
  {
    title: 'Apple',
    author: 'Rick',
    category: 'Fruit',
    planet: 'Earth',
  },
  {
    title: 'Dog',
    author: 'Rick',
    category: 'Animal',
    planet: 'Both',
  },
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/entries');

// Go through each movie
entries.map(data => {
  // Initialize a model with movie data
  const entry = new Entry(data);
  // and save it into the database
  entry.save();
});
