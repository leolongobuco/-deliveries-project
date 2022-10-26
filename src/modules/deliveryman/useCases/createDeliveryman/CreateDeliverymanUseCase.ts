import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateDeliveryman {
  username: string;
  password: string;
}

class CreateDeliverymanUseCase {
  async execute({ username, password }: ICreateDeliveryman) {
    const deliverymanExist = await prisma.deliveryman.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    if (deliverymanExist) {
      throw new Error("Deliveryman already exists");
    }

    const passwordHash = await hash(password, 10);

    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password: passwordHash,
      },
    });

    return deliveryman;
  }
}

export { CreateDeliverymanUseCase };
