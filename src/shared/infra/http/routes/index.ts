import { Router } from "express";
import { authenticateClient } from "./authenticateClient.routes";
import { clientsRoutes } from "./clients.routes";

const router = Router();

router.use(clientsRoutes);
router.use(authenticateClient);

export { router };
