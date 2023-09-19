const mongoose = require("mongoose");
const zoneSchema = mongoose.Schema({
  temp: { type: Number, required: true },
  isOn: Boolean,
});
const Zone = mongoose.model("Zone", zoneSchema);
module.exports = Zone;
