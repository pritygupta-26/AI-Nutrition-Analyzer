import "dotenv/config";
import express from "express";
import cors from "cors";

import nutritionRoutes from "./routes/nutrition.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173"
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Nutrition Analyzer API is running"
  });
});

app.use("/api/nutrition", nutritionRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});