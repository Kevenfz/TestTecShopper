import { Router } from "express";
import rideRoutes from "./rideRoutes";
import { testDatabaseConnection } from "../controllers/testController";

const router = Router();

router.use("/", rideRoutes);
router.use("/test-database", testDatabaseConnection);

export default router;