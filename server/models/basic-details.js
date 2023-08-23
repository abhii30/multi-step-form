const mongoose = require("mongoose");
const BasicDetailsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
    length: 10,
  },
  address: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
    length: 6,
  },
});

module.exports = mongoose.model("BasicDetails", BasicDetailsSchema);
