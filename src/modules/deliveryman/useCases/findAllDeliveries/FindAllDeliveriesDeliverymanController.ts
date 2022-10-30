import { Request, Response } from "express";
import { FindAllDeliveriesDeliverymanUseCase } from "./FindAllDeliveriesDeliverymanUseCase";

class FindAllDeliveriesDeliverymanController {
  async handle(request: Request, response: Response) {
    const { idDeliveryman } = request;

    const findAllDeliveriesDeliverymanUseCase =
      new FindAllDeliveriesDeliverymanUseCase();

    const deliveries = await findAllDeliveriesDeliverymanUseCase.execute(
      idDeliveryman
    );

    return response.json(deliveries);
  }
}

export { FindAllDeliveriesDeliverymanController };
