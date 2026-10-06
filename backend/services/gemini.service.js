import { GoogleGenAI } from "@google/genai";

export const analyzeFoodImage = async (imageBuffer, mimeType) => {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey || apiKey === "YOUR_GEMINI_API_KEY") {
    throw new Error("GEMINI_API_KEY is not configured.");
  }

  const ai = new GoogleGenAI({
    apiKey
  });

  const base64Image = imageBuffer.toString("base64");

  const prompt = `
You are an AI nutrition analysis assistant.

Analyze the food shown in the image.

Identify the most likely food or dish and estimate nutritional information
for the visible serving.

Return ONLY valid JSON.

Use exactly this structure:

{
  "foodName": "string",
  "servingSize": "string",
  "calories": 0,
  "protein": 0,
  "carbohydrates": 0,
  "fat": 0,
  "fiber": 0,
  "sugar": 0,
  "healthScore": 0,
  "ingredients": [],
  "healthBenefits": [],
  "recommendation": "string"
}

Rules:
1. Calories must be in kcal.
2. Protein, carbohydrates, fat, fiber and sugar must be numbers in grams.
3. healthScore must be a number between 0 and 100.
4. ingredients must be an array of strings.
5. healthBenefits must be an array of strings.
6. Estimate reasonable values when exact quantities cannot be determined.
7. Base the estimate on the visible serving.
8. Do not include markdown.
9. Do not include code fences.
10. Return only the JSON object.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        inlineData: {
          mimeType,
          data: base64Image
        }
      },
      {
        text: prompt
      }
    ]
  });

  return response.text;
};