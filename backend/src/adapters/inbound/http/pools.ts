import { Router } from "express";
import { PoolService } from "../../../core/application/poolService";

const router = Router();
const service = new PoolService();

router.post("/", async (req, res) => {
  const { year, members } = req.body;
  const result = await service.createPool(year, members);
  res.json(result);
});

export default router;
