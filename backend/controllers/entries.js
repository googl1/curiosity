import Movie from '../models/entry';
import moment from 'moment';

// Hardcode for simplicity
const planets = [ 'Earth', 'NewEarth', 'Both', 'None' ];
const categories = [ 'Animal', 'Plant', 'Fruit' ];
const authors = [ 'Thomas', 'Rick'];

export const index = (req, res, next) => {
  // Find all entries and return json response
  Entry.find().lean().exec((err, entries) => res.json(
    // Iterate through each entry
    { entries: entries.map(entry => ({
      ...entry,
      authors,     // and append author
      planets,     // planet
      categories,    // and category to each
    }))}
  ));
};
