import { analyzeFoodImage } from "../services/gemini.service.js";
import { parseGeminiResponse } from "../utils/parser.js";

export const analyzeNutrition = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a food image."
      });
    }

    const aiText = await analyzeFoodImage(
      req.file.buffer,
      req.file.mimetype
    );

    const nutritionData = parseGeminiResponse(aiText);

    return res.status(200).json({
      success: true,
      data: nutritionData
    });
  } catch (error) {
    next(error);
  }
};