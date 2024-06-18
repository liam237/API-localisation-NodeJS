import express from "express";
import { register, login, logout } from "../controllers/authController.js";
import { validateUser } from "../middleware/validateMiddleware.js";

const router = express.Router();

router.post("/register", validateUser, register);
router.post("/login", validateUser, login);
router.post("/logout", logout);

export default router;
