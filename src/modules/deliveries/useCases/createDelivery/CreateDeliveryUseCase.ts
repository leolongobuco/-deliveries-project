import { prisma } from "../../../../database/prismaClient";

interface ICreateDelivery {
  itemName: string;
  idClient: string;
}

class CreateDeliveryUseCase {
  async execute({ itemName, idClient }: ICreateDelivery) {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name: itemName,
        id_client: idClient,
      },
    });
    return delivery;
  }
}

export { CreateDeliveryUseCase };
