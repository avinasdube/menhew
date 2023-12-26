import express from "express";
import { login, logout, signup } from "../controllers/authControl.js";
import { verifyJWT } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// secured routes
router.get("/logout", verifyJWT, logout);

export default router;