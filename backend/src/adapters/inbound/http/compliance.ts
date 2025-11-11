import { Router } from "express";
import { ComplianceService } from "../../../core/application/complianceService";

const router = Router();
const service = new ComplianceService();

router.get("/cb", async (req, res) => {
  const { shipId, year } = req.query;
  const cb = await service.getCB(String(shipId), Number(year));
  res.json(cb);
});

router.get("/adjusted-cb", async (req, res) => {
  const { shipId, year } = req.query;
  const cb = await service.getAdjustedCB(String(shipId), Number(year));
  res.json(cb);
});

export default router;
