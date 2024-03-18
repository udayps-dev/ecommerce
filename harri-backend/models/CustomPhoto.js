const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const yourSchema = new Schema({
  userType: {
    type: String,
    required: true,
  },

  subcategory: {
    type: String,
    required: true,
  },
  categoryType: {
    type: String,
    required: true,
  },
  photo: {
    type: [String],
    required: true,
  },
  size: {
    type: String,
  },
  color: {
    type: String,
  },
  letters: {
    type: String,
  },
  orderID: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["pending", "processing", "shipped", "delivered"],
    default: "pending",
  },
  description: {
    type: String,
  },
});

const YourModel = mongoose.model("CustomData", yourSchema);

module.exports = YourModel;
