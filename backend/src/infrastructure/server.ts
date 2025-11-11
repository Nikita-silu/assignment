import express from "express";
import routesRouter from "../adapters/inbound/http/routes";
import complianceRouter from "../adapters/inbound/http/compliance";
import bankingRouter from "../adapters/inbound/http/banking";
import poolsRouter from "../adapters/inbound/http/pools";

const app = express();
app.use(express.json());

app.use("/routes", routesRouter);
app.use("/compliance", complianceRouter);
app.use("/banking", bankingRouter);
app.use("/pools", poolsRouter);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
