import express from "express";
import { createUser, getUsers, deleteEsha } from "../controllers/userController.js";

const router = express.Router();

router.post("/", createUser);

router.get("/", getUsers);

router.delete("/esha", deleteEsha);

export default router;
