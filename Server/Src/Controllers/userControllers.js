const User = require("../Modules/userModule.js");

// user controllers

const AddUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User added sucessfully." });
  } catch (error) {
    res
      .status(400)
      .json({ error: error.message, message: "New user not added" });
  }
};

const UpdateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    res
      .status(400)
      .json({ error: error.message, message: "Error in updating user" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User Deleted sucessfully." });
  } catch (error) {
    res
      .status(400)
      .json({ message: "error to delete user", error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User fetched successfully", user });
  } catch (error) {
    res
      .status(400)
      .json({ message: "error to find User ", error: error.message });
  }
};

const getAllUser = async (req, res) => {
  try {
    const Users = await User.find();
    res.status(200).json(Users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getUserBasedRole = async (req, res) => {
  try {
    const role = req.params.role.trim(); // Trim any extra spaces or newlines

    if (!role) {
      return res.status(400).json({ error: "Role parameter is required." });
    }

    // Explicitly filter by role using case-insensitive regex
    const users = await User.find({ role: { $regex: new RegExp(`^${role}$`, "i") } }).exec();

    if (users.length === 0) {
      return res.status(404).json({ message: "No users found for this role." });
    }

    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users by role:", error);
    res.status(500).json({ message: "Error finding users", error: error.message });
  }
};





module.exports = { getAllUser,getUserById,deleteUser,getUserBasedRole, UpdateUser ,AddUser};