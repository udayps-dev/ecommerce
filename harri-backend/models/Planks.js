const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  sizes: {
    type: String,
    required: true,
    trim: true,
  },
  letters: {
    type: String,
    required: true,
    trim: true,
  },
  colours: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
