const Contact = require("../Modules/contactModel");

// ✅ Create Contact Message
exports.createContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).json({ message: "Contact message successfully saved", savedContact });
  } catch (error) {
    res.status(500).json({ message: "Error creating contact message", error });
  }
};

// ✅ Get all contact messages
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contact messages", error });
  }
};

// ✅ Get contact message by ID
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: "Contact message not found" });
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contact message", error });
  }
};

// ✅ Delete contact message by ID
exports.deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) return res.status(404).json({ message: "Contact message not found" });
    res.status(200).json({ message: "Contact message deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting contact message", error });
  }
};
