const express = require("express");
const router = express.Router();
const appointmentController = require("../Controllers/appointmentController");

router.post("/", appointmentController.createAppointment);
router.get("/", appointmentController.getAppointments);
router.get("/:id", appointmentController.getAppointmentById);
router.delete("/:id", appointmentController.deleteAppointment);

module.exports = router;
