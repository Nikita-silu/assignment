import { Router } from "express";
import { RouteService } from "../../../core/application/routeService";

const router = Router();
const service = new RouteService();

router.get("/", async (req, res) => {
  const routes = await service.getAllRoutes();
  res.json(routes);
});

router.post("/:id/baseline", async (req, res) => {
  const { id } = req.params;
  const { year } = req.body;
  const route = await service.setBaseline(id, year);
  res.json(route);
});

router.get("/comparison", async (req, res) => {
  const { year } = req.query;
  const comparison = await service.getComparison(Number(year));
  res.json(comparison);
});

export default router;
