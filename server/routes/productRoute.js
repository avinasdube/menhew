import express from "express";
import { addNewProduct, getProductsByFilter } from "../controllers/productControl.js";

const router = express.Router();

router.post("/addnewproduct", addNewProduct);
router.post("/getproducts", getProductsByFilter);

export default router;