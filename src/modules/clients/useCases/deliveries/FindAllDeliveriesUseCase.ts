import { inject, injectable } from "tsyringe";

import { IFindAllDeliveriesRespository } from "../../repositories/IFindAllDeliveriesRepository";

interface IFindAllDeliveries {
  idClient: string;
}

@injectable()
class FindAllDeliveriesUseCase {
  constructor(
    @inject("FindAllDeliveriesRepository")
    private findAllDeliveriesRepository: IFindAllDeliveriesRespository
  ) {}

  async execute({ idClient }: IFindAllDeliveries) {
    const deliveries =
      await this.findAllDeliveriesRepository.findManyDeliveries(idClient);

    return deliveries;
  }
}

export { FindAllDeliveriesUseCase };
