const mongoose = require("mongoose");

const { Schema } = mongoose;

const assetsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  estimatedValue: {
    type: Number,
    required: true,
    min: 0.99,
  },
  // Personal Property Recommendation
  ppr: {
    type: Number,
  },
  purchasedDate: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
  },
  policy: {
    type: Schema.Types.ObjectId,
    ref: "Policy",
  },
  rooms: [{
    type: Schema.Types.ObjectId,
    ref: 'Rooms',
  }]
});

const Assets = mongoose.model("Assets", assetsSchema);

module.exports = Assets;
