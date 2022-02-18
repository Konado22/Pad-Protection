const mongoose = require('mongoose');

const { Schema } = mongoose;

const policySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  provider: {
      type: String
  },
  policyId: {
    type: String
  },
//   personal property coverage
  ppc: {
      type: String
  }
});

const Policy = mongoose.model('Policy', policySchema);

module.exports = Policy;