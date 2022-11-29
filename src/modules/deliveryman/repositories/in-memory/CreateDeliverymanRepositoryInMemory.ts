import { Deliveryman } from "../../../../entities/deliveryman";
import { ICreateDeliverymanDTO } from "../../dtos/ICreateDeliverymanDTO";
import { ICreateDeliverymanRepository } from "../ICreateDeliverymanRepository";

class CreateDeliverymanRepositoryInMemory
  implements ICreateDeliverymanRepository
{
  public deliverymen: Deliveryman[] = [];

  async create({
    password,
    username,
  }: ICreateDeliverymanDTO): Promise<Deliveryman> {
    const deliveryman = new Deliveryman({
      username,
      password,
    });

    this.deliverymen.push(deliveryman);

    return deliveryman;
  }
  async findOneDeliverymanByUsername(
    username: string
  ): Promise<Deliveryman | null> {
    const deliveryman = this.deliverymen.find(
      (deliveryman) => deliveryman.username === username
    );

    if (!deliveryman) return null;

    return deliveryman;
  }
}
