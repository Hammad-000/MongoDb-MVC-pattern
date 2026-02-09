import User from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteUsersByName = async (req, res) => {
  try {
    const { name } = req.params;

    const result = await User.deleteMany({ name });

    res.json({
      message: `Deleted users with name ${name}`,
      deletedCount: result.deletedCount
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteEsha = async (req, res) => {
  try {
    const result = await User.deleteMany({ name: "" });
    res.json({
      message: "Deleted successfully",
      deletedCount: result.deletedCount
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 


