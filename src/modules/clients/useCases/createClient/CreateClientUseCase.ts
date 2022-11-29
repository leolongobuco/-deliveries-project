import { Clients } from "@prisma/client";
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { ICreateClientsDTO } from "../../dtos/ICreateClientsDTO";
import { IClientsRepository } from "../../repositories/IClientsRepository";

@injectable()
class CreateClientUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}

  async execute({ password, username }: ICreateClientsDTO): Promise<Clients> {
    const clientExist = await this.clientsRepository.findOneClientByUsername(
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
