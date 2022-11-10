import { Clients, PrismaClient } from "@prisma/client";

import { prisma } from "../../../../../database/prismaClient";
import { ICreateClientsDTO } from "../../../dtos/ICreateClientsDTO";
import { IClientsRepository } from "../../../repositories/IClientsRepository";

class ClientsRepository implements IClientsRepository {
  private repository: PrismaClient;
  constructor() {
    this.repository = prisma;
  }

  async create({ username, password }: ICreateClientsDTO): Promise<Clients> {
    const client = await this.repository.clients.create({
      data: {
        username,
        password,
      },
    });

    return client;
  }

  async findOneByUsername(username: string): Promise<Clients | null> {
    const client = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    return client;
  }
}

export { ClientsRepository };
