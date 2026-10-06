export const parseGeminiResponse = (text) => {
  if (!text) {
    throw new Error("Empty response received from AI.");
  }

  let cleaned = text.trim();

  // Remove accidental Markdown code fences.
  cleaned = cleaned
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  try {
    const data = JSON.parse(cleaned);

    if (!data.foodName) {
      throw new Error("Missing food name.");
    }

    return data;
  } catch (error) {
    console.error("Gemini response was not valid JSON:", cleaned);
    throw new Error("AI returned an invalid nutrition response.");
  }
};