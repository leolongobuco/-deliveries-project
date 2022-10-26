import { Request, Response } from "express";
import { AuthenticanteDelivyermanUseCase } from "./AuthenticateDeliverymanUseCase";

class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateDeliverymanUseCase =
      new AuthenticanteDelivyermanUseCase();

    const token = await authenticateDeliverymanUseCase.execute({
      username,
      password,
    });
    return response.json(token);
  }
}

export { AuthenticateDeliverymanController };
