import { Client } from "../../../../entities/client";
import { ICreateClientsDTO } from "../../dtos/ICreateClientsDTO";
import { IClientsRepository } from "../IClientsRepository";

class ClientsRepositoryInMemory implements IClientsRepository {
  public clients: Client[] = [];

  async create({ password, username }: ICreateClientsDTO): Promise<Client> {
    const client = new Client({ username, password });

    this.clients.push(client);

    return client;
  }

  async findOneClientByUsername(username: string): Promise<Client | null> {
    const client = this.clients.find((client) => client.username === username);

    if (!client) return null;

    return client;
  }
}

export { ClientsRepositoryInMemory };
