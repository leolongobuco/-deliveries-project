import { Clients } from "@prisma/client";
import { ICreateClientsDTO } from "../dtos/ICreateClientsDTO";

interface IClientsRepository {
  create(data: ICreateClientsDTO): Promise<Clients>;
  findOneByUsername(username: string): Promise<Clients | null>;
}

export { IClientsRepository };
