import { Request, Response } from "express";
import { FindAllDeliveriesUseCase } from "./FindAllDeliveriesUseCase";

class FindAllDeliveriesController {
  async handle(request: Request, response: Response) {
    const { idClient } = request;

    const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();

    const deliveries = await findAllDeliveriesUseCase.execute(idClient);

    return response.json(deliveries);
  }
}

export { FindAllDeliveriesController };
