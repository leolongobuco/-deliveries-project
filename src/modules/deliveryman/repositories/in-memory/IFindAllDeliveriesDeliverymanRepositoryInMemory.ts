import { Deliveryman } from "../../../../entities/deliveryman";
import { IFindAllDeliveriesRespository } from "../../../clients/repositories/IFindAllDeliveriesRepository";
import { IFindAllDeliveriesDeliverymanDTO } from "../../dtos/IFindAllDeliveriesDeliverymanDTO";

class IFindAllDeliveriesDeliverymanRepositoryInMemory
  implements IFindAllDeliveriesRespository
{
  public deliverymen: Deliveryman[] = [];

  async findManyDeliveries(
    idDeliveryman: string
  ): Promise<IFindAllDeliveriesDeliverymanDTO[]> {
    throw new Error("Not Implemented");
  }
}

export { IFindAllDeliveriesDeliverymanRepositoryInMemory };
