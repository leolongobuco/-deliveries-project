import { IFindAllDeliveriesDTO } from "../dtos/IFindAllDeliveriesDTO";

interface IFindAllDeliveriesRespository {
  findManyDeliveries(idClient: string): Promise<IFindAllDeliveriesDTO[]>;
}

export { IFindAllDeliveriesRespository };
