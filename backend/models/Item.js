const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ItemSchema = new Schema({
    description: {
    type: String,
    require: true
  },
  userInput: {
    type: String
  },
 
 
}, {
    collection: 'Items'
  })
module.exports = mongoose.model('Item', ItemSchema)