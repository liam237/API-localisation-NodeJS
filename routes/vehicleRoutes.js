import express from "express";
import { getVehiclePositions } from "../controllers/vehicleController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", auth, getVehiclePositions);

export default router;
