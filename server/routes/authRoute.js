import express from "express";
import { signup } from "../controllers/authControl.js";

const router = express.Router();

router.post("/signup", signup);

export default router;