import { Client } from "../../../../entities/client";
import { Delivery } from "../../../../entities/delivery";
import { IFindAllDeliveriesDTO } from "../../dtos/IFindAllDeliveriesDTO";
import { IFindAllDeliveriesRespository } from "../IFindAllDeliveriesRepository";

class FindAllDeliveriesRepositoryInMemory
  implements IFindAllDeliveriesRespository
{
  async findManyDeliveries(idClient: string): Promise<IFindAllDeliveriesDTO[]> {
    throw new Error("Not Implemented");
  }
}

export { FindAllDeliveriesRepositoryInMemory };
