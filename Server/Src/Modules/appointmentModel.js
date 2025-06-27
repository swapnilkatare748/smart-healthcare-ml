const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  age: { type: Number },
  symptoms: { type: String },
  doctor: { type: String },
  timeSlot: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
