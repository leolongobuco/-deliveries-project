import { PrismaClient } from "@prisma/client";

import { prisma } from "../../../../../database/prismaClient";
import { Deliveryman } from "../../../../../entities/deliveryman";
import { ICreateDeliverymanDTO } from "../../../dtos/ICreateDeliverymanDTO";
import { ICreateDeliverymanRepository } from "../../../repositories/ICreateDeliverymanRepository";

class CreateDeliverymanRepository implements ICreateDeliverymanRepository {
  private repository: PrismaClient;

  constructor() {
    this.repository = prisma;
  }

  async create({
    password,
    username,
  }: ICreateDeliverymanDTO): Promise<Deliveryman> {
    const deliveryman = await this.repository.deliveryman.create({
      data: {
        username,
        password,
      },
    });

    return deliveryman as Deliveryman;
  }

  async findOneDeliverymanByUsername(
    username: string
  ): Promise<Deliveryman | null> {
    const deliverymanExist = await this.repository.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });
    return deliverymanExist as Deliveryman;
  }
}

export { CreateDeliverymanRepository };
