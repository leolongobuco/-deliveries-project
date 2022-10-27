import { Router } from "express";
import { CreateDeliveryController } from "../../../../modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticateClient";

const deliveryRoutes = Router();

const createDeliveryController = new CreateDeliveryController();

deliveryRoutes.post(
  "/delivery",
  ensureAuthenticateClient,
  createDeliveryController.handle
);

export { deliveryRoutes };
