import express from "express";
import upload from "../middleware/upload.middleware.js";
import { analyzeNutrition } from "../controllers/nutrition.controller.js";

const router = express.Router();

router.post(
  "/analyze",
  upload.single("image"),
  analyzeNutrition
);

export default router;