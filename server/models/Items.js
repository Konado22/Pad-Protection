const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemsSchema = new Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemCategory: {
      type: String
  },
  itemValue: {
    type: Number,
    required: true,
    min: 0.99
  },
  itemPurchasedDate: {
    type: Date,
    default: Date.now 
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: 'Rooms',
    required: true
  }
});

const Items = mongoose.model('Items', itemsSchema);

module.exports = Items;