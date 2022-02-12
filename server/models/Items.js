const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
      type: String
  },
  value: {
    type: Number,
    required: true,
    min: 0.99
  },
  purchasedDate: {
    type: Date,
    default: Date.now 
  }
});

const Items = mongoose.model('Items', itemsSchema);

module.exports = Items;