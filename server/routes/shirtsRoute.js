import express from 'express';
import { getShirts } from '../controllers/shirtsControl.js';

const router = express.Router();

router.get("/allshirts", getShirts)

export default router;