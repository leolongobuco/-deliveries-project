import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database/prismaClient";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

class AuthenticanteDelivyermanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username,
      },
    });

    if (!deliveryman) {
      throw new Error("Username or password invalid!");
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid!");
    }

    const token = sign({ username }, "6641f536e92b926dc45e213d2d6f642b", {
      subject: deliveryman.id,
      expiresIn: "1d",
    });

    return token;
  }
}

export { AuthenticanteDelivyermanUseCase };
