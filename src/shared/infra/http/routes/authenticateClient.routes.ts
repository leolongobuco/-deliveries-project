import { Router } from "express";
import { AuthenticateClientController } from "../../../../modules/account/authenticateClient/useCases/AuthenticateClientController";

const authenticateClient = Router();

const autheticateClientController = new AuthenticateClientController();

authenticateClient.post("/authenticate", autheticateClientController.handle);

export { authenticateClient };
