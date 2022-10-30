import { Router } from "express";
import { CreateClientController } from "../../../../modules/clients/useCases/createClient/CreateClientController";
import { FindAllDeliveriesController } from "../../../../modules/clients/useCases/deliveries/FindAllDeliveriesController";
import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticateClient";

const clientsRoutes = Router();

const createClientController = new CreateClientController();
const findAllDeliveriesController = new FindAllDeliveriesController();

clientsRoutes.post("/client", createClientController.handle);

clientsRoutes.get(
  "/client/deliveries",
  ensureAuthenticateClient,
  findAllDeliveriesController.handle
);

export { clientsRoutes };
