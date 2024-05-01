const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
  first_name: {
    type: String
  },
  email: {
    type: String
  },
  contato: {
    type: Number
  },
  picture: {
    type: String
  }
},{
    collection: 'user'
});

module.exports = mongoose.model('User', User);