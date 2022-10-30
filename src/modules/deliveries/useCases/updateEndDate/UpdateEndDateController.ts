import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";

class UpdateEndDateController {
  async handle(request: Request, response: Response) {
    const { idDeliveryman } = request;
    const { id: idDelivery } = request.params;

    const updateEndDateUseCase = new UpdateEndDateUseCase();

    const delivery = await updateEndDateUseCase.execute({
      idDeliveryman,
      idDelivery,
    });

    return response.json(delivery);
  }
}

export { UpdateEndDateController };
