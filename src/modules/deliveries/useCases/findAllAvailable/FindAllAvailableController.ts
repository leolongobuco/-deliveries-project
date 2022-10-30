import { Request, Response } from "express";
import { FindAllAvailablUseCase } from "./FindAllAvailableUseCase";

class FindAllAvailableController {
  async handle(request: Request, response: Response) {
    const findAllAvailableUseCase = new FindAllAvailablUseCase();

    const deliveries = await findAllAvailableUseCase.execute();

    return response.json(deliveries);
  }
}

export { FindAllAvailableController };
