const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  UseUnifiedTopology: true,
});

//create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo
/* Photo.create({
  title: 'Photo Title 2',
  description: 'Photo description 2 lorem ipsum',
}); */

//read a photo
/* Photo.find({}, (err, data) => {
  console.log(data);
});
 */

//update photo
/* const id = '6361effc0bbe71b5b7e61148';

Photo.findByIdAndUpdate(
  id,
  {
    title: 'Photo Title 111 Updated',
    description: 'Photo description 111 Updated',
  },
  {
    new: true,
  },
  (err, data) => {
    console.log(data);
  }
); */

//detele a photo
const id = '6361f1b7c10c99b5c5cf68df';

Photo.findByIdAndDelete(id, (err,data) => {
    console.log('Photo is removed..');
});
