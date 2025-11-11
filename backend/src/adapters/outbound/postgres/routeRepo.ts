import { prisma } from "../../../infrastructure/db/prismaClient";
import { RouteRepository } from "../../../core/ports/RouteRepository";
import { Route } from "../../../core/domain/Route";

export class PrismaRouteRepo implements RouteRepository {
  async getAll(): Promise<Route[]> {
    return prisma.route.findMany();
  }

  async getBaseline(): Promise<Route | null> {
    return prisma.route.findFirst({ where: { isBaseline: true } });
  }

  async setBaseline(routeId: string): Promise<Route> {
    // unset previous baseline
    await prisma.route.updateMany({ where: { isBaseline: true }, data: { isBaseline: false } });
    return prisma.route.update({ where: { routeId }, data: { isBaseline: true } });
  }
}
