import { prisma } from "../../../../database/prismaClient";

class FindAllDeliveriesDeliverymanUseCase {
  async execute(idDeliveryman: string) {
    const deliveries = await prisma.deliveryman.findMany({
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

export { FindAllDeliveriesDeliverymanUseCase };
