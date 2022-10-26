import { Router } from "express";
import { AuthenticateClientController } from "../../../../modules/account/useCases/authenticateClient/AuthenticateClientController";

const authenticateClientRoutes = Router();

const autheticateClientController = new AuthenticateClientController();

authenticateClientRoutes.post(
  "/authenticate",
  autheticateClientController.handle
);

export { authenticateClientRoutes };
