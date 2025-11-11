import { prisma } from "../../infrastructure/db/prismaClient";

export class ComplianceService {
  async getCB(shipId: string, year: number) {
    return prisma.shipCompliance.findFirst({ where: { shipId, year } });
  }

  async getAdjustedCB(shipId: string, year: number) {
    const record = await prisma.shipCompliance.findFirst({ where: { shipId, year } });
    if (!record) throw new Error("No compliance record");

    const banked = await prisma.bankEntry.findMany({ where: { shipId, year } });
    const applied = banked.reduce((sum, b) => sum + b.amountGco2, 0);

    return { ...record, adjustedCb: record.cbGco2eq + applied };
  }
}
