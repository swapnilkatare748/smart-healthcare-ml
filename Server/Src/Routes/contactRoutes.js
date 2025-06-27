const express = require("express");
const router = express.Router();
const contactController = require("../Controllers/contactController");

router.post("/", contactController.createContact); // Create a new contact message
router.get("/", contactController.getContacts); // Get all contact messages
router.get("/:id", contactController.getContactById); // Get a single contact by ID
router.delete("/:id", contactController.deleteContact); // Delete a contact by ID

module.exports = router;
