import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./CreateDeliverymanUseCase";

class CreateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const createDeliverymanUseCase = new CreateDeliverymanUseCase();

    const deliveryman = await createDeliverymanUseCase.execute({
      username,
      password,
    });

    return response.status(201).json(deliveryman);
  }
}

export { CreateDeliverymanController };
