const mongoose = require("mongoose");
const microSchema = mongoose.Schema({
  message: String,
  toggle: Boolean,
});
const Micro = mongoose.model("Micro", microSchema);
module.exports = Micro;
