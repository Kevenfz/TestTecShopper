import { Router } from "express";
import rideRoutes from "./rideRoutes";

const router = Router();

router.use("/", rideRoutes);

export default router;