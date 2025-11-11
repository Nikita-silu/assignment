import { prisma } from "../../infrastructure/db/prismaClient";

export class RouteService {
  async getAllRoutes() {
    return prisma.route.findMany();
  }

  async setBaseline(routeId: string, year: number) {
    await prisma.route.updateMany({
      where: { year, isBaseline: true },
      data: { isBaseline: false },
    });

    return prisma.route.update({
      where: { routeId },
      data: { isBaseline: true },
    });
  }

  async getComparison(year: number) {
    const routes = await prisma.route.findMany({ where: { year } });
    const baseline = routes.find(r => r.isBaseline);
    if (!baseline) throw new Error("No baseline found");

    return routes.map(r => ({
      routeId: r.routeId,
      ghgIntensity: r.ghgIntensity,
      baseline: baseline.ghgIntensity,
      percentDiff: ((r.ghgIntensity / baseline.ghgIntensity) - 1) * 100,
      compliant: r.ghgIntensity <= baseline.ghgIntensity,
    }));
  }
}
