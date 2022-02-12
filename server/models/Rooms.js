const mongoose = require('mongoose');

const { Schema } = mongoose;

const roomsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Items'
    }
  ]
});

const Rooms = mongoose.model('Rooms', roomsSchema);

module.exports = Rooms;
