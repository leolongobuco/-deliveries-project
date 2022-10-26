import { Router } from "express";
import { AuthenticateDeliverymanController } from "../../../../modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController";

const authenticateDeliverymanRouts = Router();

const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();

authenticateDeliverymanRouts.post(
  "/authenticate",
  authenticateDeliverymanController.handle
);

export { authenticateDeliverymanRouts };
