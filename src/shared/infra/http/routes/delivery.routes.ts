import { Router } from "express";
import { CreateDeliveryController } from "../../../../modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "../../../../modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { UpdateDeliverymanController } from "../../../../modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { UpdateEndDateController } from "../../../../modules/deliveries/useCases/updateEndDate/UpdateEndDateController";
import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "../middlewares/ensureAuthenticateDeliveryman";

const deliveryRoutes = Router();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

deliveryRoutes.post(
  "/",
  ensureAuthenticateClient,
  createDeliveryController.handle
);

deliveryRoutes.get(
  "/available",
  ensureAuthenticateDeliveryman,
  findAllAvailableController.handle
);

deliveryRoutes.put(
  "/updateDeliveryman/:id",
  ensureAuthenticateDeliveryman,
  updateDeliverymanController.handle
);

deliveryRoutes.put(
  "/updateEndDate/:id",
  ensureAuthenticateDeliveryman,
  updateEndDateController.handle
);

export { deliveryRoutes };
