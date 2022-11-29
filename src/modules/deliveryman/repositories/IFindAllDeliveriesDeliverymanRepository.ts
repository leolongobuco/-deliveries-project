import { IFindAllDeliveriesDeliverymanDTO } from "../dtos/IFindAllDeliveriesDeliverymanDTO";

interface IFindAllDeliveriesDeliverymanRepository {
  findManyDeliveries(
    idDeliveryman: string
  ): Promise<IFindAllDeliveriesDeliverymanDTO[]>;
}

export { IFindAllDeliveriesDeliverymanRepository };
