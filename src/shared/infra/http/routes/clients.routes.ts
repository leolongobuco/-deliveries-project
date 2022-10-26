import { Router } from "express";
import { CreateClientController } from "../../../../modules/clients/useCases/createClient/CreateClientController";

const clientsRoutes = Router();

const createClientController = new CreateClientController();

clientsRoutes.post("/client", createClientController.handle);

export { clientsRoutes };
