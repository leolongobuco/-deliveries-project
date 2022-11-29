import { Client } from "../../../entities/client";
import { ICreateClientsDTO } from "../dtos/ICreateClientsDTO";

interface IClientsRepository {
  create(data: ICreateClientsDTO): Promise<Client>;
  findOneClientByUsername(username: string): Promise<Client | null>;
}

export { IClientsRepository };
