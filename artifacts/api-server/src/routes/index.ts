import { Router, type IRouter } from "express";
import healthRouter from "./health";
import ingestionRouter from "./ingestion";

const router: IRouter = Router();

router.use(healthRouter);
router.use(ingestionRouter);

export default router;
