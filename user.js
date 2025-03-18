const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mongoosepractice");

const userSchema = mongoose.Schema({
  user: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("user", userSchema);
