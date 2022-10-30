import { prisma } from "../../../../database/prismaClient";

class FindAllAvailablUseCase {
  async execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        end_at: null,
      },
    });
    return deliveries;
  }
}

export { FindAllAvailablUseCase };
