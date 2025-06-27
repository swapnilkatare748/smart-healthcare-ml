const express = require("express");
const userRoutes = require('./userRoutes');
const Appointment = require('./appointmentRoutes');
const Contact = require("./contactRoutes");
const userRoutesother = require("./UsersRoutesOther");

const router = express.Router();

router.use('/auth',userRoutes);

router.use('/appointments',Appointment);

router.use('/contact',Contact);

router.use('/users',userRoutesother);

module.exports = router