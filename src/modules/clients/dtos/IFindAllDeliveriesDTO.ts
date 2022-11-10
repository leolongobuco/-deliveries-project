import { Deliveries } from "@prisma/client";

interface IFindAllDeliveriesDTO {
  id: string;
  username: string;
  deliveries: Deliveries[];
}

export { IFindAllDeliveriesDTO };
