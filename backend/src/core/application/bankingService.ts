import { prisma } from "../../infrastructure/db/prismaClient";

export class BankingService {
  async getRecords(shipId: string, year: number) {
    return prisma.bankEntry.findMany({ where: { shipId, year } });
  }

  async bankSurplus(shipId: string, year: number, amount: number) {
    return prisma.bankEntry.create({
      data: { shipId, year, amountGco2: amount },
    });
  }

  async applyBanked(shipId: string, year: number, amount: number) {
    return prisma.bankEntry.create({
      data: { shipId, year, amountGco2: -amount },
    });
  }
}
