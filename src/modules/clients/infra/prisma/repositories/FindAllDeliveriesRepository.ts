import { PrismaClient } from "@prisma/client";
import { prisma } from "../../../../../database/prismaClient";

import { IFindAllDeliveriesDTO } from "../../../dtos/IFindAllDeliveriesDTO";
import { IFindAllDeliveriesRespository } from "../../../repositories/IFindAllDeliveriesRepository";

class FindAllDeliveriesRepository implements IFindAllDeliveriesRespository {
  private repository: PrismaClient;
  constructor() {
    this.repository = prisma;
  }

  async findManyDeliveries(idClient: string): Promise<IFindAllDeliveriesDTO[]> {
    const deliveries = await this.repository.clients.findMany({
      where: {
        id: idClient,
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

export { FindAllDeliveriesRepository };
