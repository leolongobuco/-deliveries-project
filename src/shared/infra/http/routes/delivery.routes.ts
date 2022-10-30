import { Router } from "express";
import { CreateDeliveryController } from "../../../../modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "../../../../modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "../middlewares/ensureAuthenticateDeliveryman";

const deliveryRoutes = Router();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();

deliveryRoutes.post(
  "/delivery",
  ensureAuthenticateClient,
  createDeliveryController.handle
);

deliveryRoutes.get(
  "/delivery/available",
  ensureAuthenticateDeliveryman,
  findAllAvailableController.handle
);

export { deliveryRoutes };
