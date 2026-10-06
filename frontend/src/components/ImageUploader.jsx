import { useEffect, useState } from "react";

import { analyzeFood } from "../services/api";
import Loading from "./Loading";
import NutritionDashboard from "./NutritionDashboard";

function ImageUploader() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Image size must be less than 5 MB.");
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
    setError("");
  };

  const handleAnalyze = async () => {
    if (!image) {
      setError("Please choose a food image first.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await analyzeFood(image);

      if (!response.success) {
        throw new Error(
          response.message || "Analysis failed."
        );
      }

      setResult(response.data);
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
        err.message ||
        "Unable to analyze the food image."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setImage(null);
    setPreview("");
    setResult(null);
    setError("");
  };

  if (loading) {
    return <Loading />;
  }

  if (result) {
    return (
      <NutritionDashboard
        result={result}
        image={preview}
        onReset={handleReset}
      />
    );
  }

  return (
    <section className="upload-card">
      <div className="upload-icon">🥗</div>

      <p className="eyebrow">AI-POWERED FOOD ANALYSIS</p>

      <h2>Analyze Your Meal</h2>

      <p className="upload-description">
        Upload a clear photo of your food and let AI estimate
        calories, nutrients, ingredients and health information.
      </p>

      <label className="primary-button">
        📷 Choose Food Image

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          hidden
        />
      </label>

      {preview && (
        <div className="preview-area">
          <img
            className="preview-image"
            src={preview}
            alt="Selected food"
          />

          <button
            className="analyze-button"
            onClick={handleAnalyze}
          >
            🔍 Analyze Food
          </button>
        </div>
      )}

      {error && (
        <div className="error-message">
          ⚠️ {error}
        </div>
      )}

      <p className="file-info">
        JPG, JPEG, PNG • Maximum 5 MB
      </p>
    </section>
  );
}

export default ImageUploader;