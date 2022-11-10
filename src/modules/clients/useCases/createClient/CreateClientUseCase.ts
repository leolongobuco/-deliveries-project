import { Clients } from "@prisma/client";
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { IClientsRepository } from "../../repositories/IClientsRepository";

interface ICreateClient {
  username: string;
  password: string;
}

@injectable()
class CreateClientUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}

  async execute({ password, username }: ICreateClient): Promise<Clients> {
    const clientExist = await this.clientsRepository.findOneByUsername(
      username
    );

    if (clientExist) {
      throw new Error("Client already exists");
    }

    const passwordHash = await hash(password, 10);

    const client = await this.clientsRepository.create({
      username,
      password: passwordHash,
    });

    return client;
  }
}

export { CreateClientUseCase };
