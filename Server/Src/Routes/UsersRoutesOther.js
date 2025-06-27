const express = require("express");
const {
  getAllUser,
  getUserById,
  deleteUser,
  getUserBasedRole,
  UpdateUser,
  AddUser,
} = require("../Controllers/userControllers");

const router = express.Router();

// ✅ Add a new user
router.post("/", AddUser);

// ✅ Update user by ID
router.put("/:id", UpdateUser);

// ✅ Delete user by ID
router.delete("/:id", deleteUser);

// ✅ Get all users
router.get("/", getAllUser);

// ✅ Get users based on role (patient, doctor, admin)
router.get("/:role", getUserBasedRole);

// ✅ Get user by ID
router.get("/:id", getUserById);

module.exports = router;
