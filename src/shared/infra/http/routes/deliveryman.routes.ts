import { Router } from "express";
import { CreateDeliverymanController } from "../../../../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { FindAllDeliveriesDeliverymanController } from "../../../../modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController";
import { ensureAuthenticateDeliveryman } from "../middlewares/ensureAuthenticateDeliveryman";

const deliverymanRoutes = Router();

const createDeliverymanController = new CreateDeliverymanController();
const findAllDeliveriesDeliverymanController =
  new FindAllDeliveriesDeliverymanController();

deliverymanRoutes.post("/", createDeliverymanController.handle);

deliverymanRoutes.get(
  "/deliveries/:id",
  ensureAuthenticateDeliveryman,
  findAllDeliveriesDeliverymanController.handle
);

export { deliverymanRoutes };
