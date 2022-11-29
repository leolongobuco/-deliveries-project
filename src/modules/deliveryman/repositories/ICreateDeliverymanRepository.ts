import { Deliveryman } from "../../../entities/deliveryman";
import { ICreateDeliverymanDTO } from "../dtos/ICreateDeliverymanDTO";

interface ICreateDeliverymanRepository {
  create(data: ICreateDeliverymanDTO): Promise<Deliveryman>;
  findOneDeliverymanByUsername(username: string): Promise<Deliveryman | null>;
}

export { ICreateDeliverymanRepository };
