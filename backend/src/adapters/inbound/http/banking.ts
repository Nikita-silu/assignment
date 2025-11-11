import { Router } from "express";
import { BankingService } from "../../../core/application/bankingService";

const router = Router();
const service = new BankingService();

router.get("/records", async (req, res) => {
  const { shipId, year } = req.query;
  const records = await service.getRecords(String(shipId), Number(year));
  res.json(records);
});

router.post("/bank", async (req, res) => {
  const { shipId, year, amount } = req.body;
  const result = await service.bankSurplus(shipId, year, amount);
  res.json(result);
});

router.post("/apply", async (req, res) => {
  const { shipId, year, amount } = req.body;
  const result = await service.applyBanked(shipId, year, amount);
  res.json(result);
});

export default router;
