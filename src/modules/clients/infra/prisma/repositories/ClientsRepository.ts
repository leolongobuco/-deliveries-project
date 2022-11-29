import { PrismaClient } from "@prisma/client";

import { Client } from "../../../../../entities/client";
import { prisma } from "../../../../../database/prismaClient";
import { ICreateClientsDTO } from "../../../dtos/ICreateClientsDTO";
import { IClientsRepository } from "../../../repositories/IClientsRepository";

class ClientsRepository implements IClientsRepository {
  private repository: PrismaClient;

  constructor() {
    this.repository = prisma;
  }

  async create({ username, password }: ICreateClientsDTO): Promise<Client> {
    const client = await this.repository.clients.create({
      data: {
        username,
        password,
      },
    });

    return client as Client;
  }

  async findOneClientByUsername(username: string): Promise<Client | null> {
    const client = await this.repository.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    return client as Client;
  }
}

export { ClientsRepository };
