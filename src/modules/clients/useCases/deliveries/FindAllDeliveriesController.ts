import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindAllDeliveriesUseCase } from "./FindAllDeliveriesUseCase";

class FindAllDeliveriesController {
  async handle(request: Request, response: Response) {
    const { idClient } = request;

    const findAllDeliveriesUseCase = container.resolve(
      FindAllDeliveriesUseCase
    );

    const deliveries = await findAllDeliveriesUseCase.execute({ idClient });

    return response.json(deliveries);
  }
}

export { FindAllDeliveriesController };
