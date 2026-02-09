import express from "express";
import { createUser, getUsers, deleteEsha, deleteUsersByName } from "../Controllers/userController.js";

const router = express.Router();

router.post("/", createUser);
router.get("/users", getUsers);

// DELETE fixed Esha users
router.delete("/users/esha", deleteEsha);

// DELETE users dynamically by name
router.delete("/users/:name", deleteUsersByName);

export default router;
