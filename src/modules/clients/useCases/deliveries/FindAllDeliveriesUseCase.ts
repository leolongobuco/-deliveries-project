import { prisma } from "../../../../database/prismaClient";

class FindAllDeliveriesUseCase {
  async execute(idClient: string) {
    const deliveries = await prisma.clients.findMany({
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

export { FindAllDeliveriesUseCase };
