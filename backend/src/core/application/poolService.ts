
import { prisma } from "../../infrastructure/db/prismaClient";

export class PoolService {
  async createPool(year: number, members: { shipId: string; cbBefore: number }[]) {
    const pool = await prisma.pool.create({ data: { year } });

    const membersWithAfter = members.map(m => ({
      poolId: pool.id,
      shipId: m.shipId,
      cbBefore: m.cbBefore,
      cbAfter: m.cbBefore,
    }));

    await prisma.poolMember.createMany({ data: membersWithAfter });

    return { poolId: pool.id, members: membersWithAfter };
  }
}
