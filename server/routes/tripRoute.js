import express from "express";
import { getAllTrips, createTrip } from "../controllers/tripController.js";

const router = express.Router();

router.get("/", getAllTrips);
router.post("/", createTrip)

export default router;