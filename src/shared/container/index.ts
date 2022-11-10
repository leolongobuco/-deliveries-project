import { container } from "tsyringe";
import { ClientsRepository } from "../../modules/clients/infra/prisma/repositories/ClientsRepository";
import { FindAllDeliveriesRepository } from "../../modules/clients/infra/prisma/repositories/FindAllDeliveriesRepository";
import { IClientsRepository } from "../../modules/clients/repositories/IClientsRepository";
import { IFindAllDeliveriesRespository } from "../../modules/clients/repositories/IFindAllDeliveriesRepository";

container.registerSingleton<IClientsRepository>(
  "ClientsRepository",
  ClientsRepository
);

container.registerSingleton<IFindAllDeliveriesRespository>(
  "FindAllDeliveriesRepository",
  FindAllDeliveriesRepository
);
