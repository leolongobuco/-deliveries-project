import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

class CreateDeliveryController {
  async handle(request: Request, response: Response) {
    const { idClient, itemName } = request.body;

    const createDeliveryUseCase = new CreateDeliveryUseCase();

    const delivery = await createDeliveryUseCase.execute({
      idClient,
      itemName,
    });

    return response.json(delivery).status(201);
  }
}

export { CreateDeliveryController };
