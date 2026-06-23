const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  petName: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  breed: {
    type: String
  },
  age: {
    type: Number
  },
  location: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Pet", petSchema);