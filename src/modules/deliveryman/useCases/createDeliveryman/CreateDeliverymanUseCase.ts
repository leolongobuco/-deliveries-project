import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { ICreateDeliverymanDTO } from "../../dtos/ICreateDeliverymanDTO";
import { ICreateDeliverymanRepository } from "../../repositories/ICreateDeliverymanRepository";

@injectable()
class CreateDeliverymanUseCase {
  constructor(
    @inject("CreateDeliverymanRepository")
    private deliverymanRepository: ICreateDeliverymanRepository
  ) {}

  async execute({ username, password }: ICreateDeliverymanDTO) {
    const deliverymanExist =
      await this.deliverymanRepository.findOneDeliverymanByUsername(username);

    if (deliverymanExist) {
      throw new Error("Deliveryman already exists");
    }

    const passwordHash = await hash(password, 10);

    const deliveryman = await this.deliverymanRepository.create({
      username,
      password: passwordHash,
    });

    return deliveryman;
  }
}

export { CreateDeliverymanUseCase };
