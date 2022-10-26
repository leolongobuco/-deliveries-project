import { Router } from "express";
import { authenticateClientRoutes } from "./authenticateClient.routes";
import { authenticateDeliverymanRouts } from "./authenticateDeliveryman.routes";
import { clientsRoutes } from "./clients.routes";
import { deliverymanRoutes } from "./deliveryman.routes";

const router = Router();

router.use(clientsRoutes);
router.use("/client", authenticateClientRoutes);
router.use("/deliveryman", authenticateDeliverymanRouts);
router.use(deliverymanRoutes);

export { router };
