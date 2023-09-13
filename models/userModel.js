const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
    },
    address: {
      type: String,
      required: [true, "Please provide address"],
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
    },
    vatNo: {
      type: String,
      unique: true,
      sparse: true,
    },
    phone: {
      type: String,
      required: [true, "Please provide phone"],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
