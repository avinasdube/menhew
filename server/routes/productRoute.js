import express from "express";
import { addNewProduct } from "../controllers/productControl.js";

const router = express.Router();

router.post("/addnewproduct", addNewProduct);

export default router;