import { PrismaClient } from "@prisma/client";

import { prisma } from "../../../../../database/prismaClient";
import { IFindAllDeliveriesDeliverymanDTO } from "../../../dtos/IFindAllDeliveriesDeliverymanDTO";
import { IFindAllDeliveriesDeliverymanRepository } from "../../../repositories/IFindAllDeliveriesDeliverymanRepository";

class FindAllDeliveriesDeliverymanRepository
  implements IFindAllDeliveriesDeliverymanRepository
{
  private repository: PrismaClient;

  constructor() {
    this.repository = prisma;
  }

  async findManyDeliveries(
    idDeliveryman: string
  ): Promise<IFindAllDeliveriesDeliverymanDTO[]> {
    const deliveries = await this.repository.deliveryman.findMany({
      where: {
        id: idDeliveryman,
      },
      select: {
        username: true,
        id: true,
        deliveries: true,
      },
    });

    return deliveries;
  }
}

export { FindAllDeliveriesDeliverymanRepository };
