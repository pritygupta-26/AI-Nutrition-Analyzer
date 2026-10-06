import NutritionCard from "./NutritionCard";
import HealthScore from "./HealthScore";

function NutritionDashboard({ result, image, onReset }) {
  return (
    <section className="dashboard">
      <div className="result-top">
        <div>
          <p className="eyebrow">AI FOOD ANALYSIS</p>

          <h2>{result.foodName}</h2>

          <p className="serving">
            Estimated serving: {result.servingSize || "Not specified"}
          </p>
        </div>

        <button className="secondary-button" onClick={onReset}>
          + New Analysis
        </button>
      </div>

      <div className="result-image-wrapper">
        <img
          className="result-image"
          src={image}
          alt={result.foodName}
        />
      </div>

      <section className="calorie-panel">
        <div className="calorie-icon">🔥</div>

        <div>
          <p>Total Calories</p>

          <h3>
            {result.calories ?? 0}
            <span> kcal</span>
          </h3>
        </div>
      </section>

      <h3 className="section-heading">
        Nutrition Breakdown
      </h3>

      <div className="nutrition-grid">
        <NutritionCard
          icon="🥩"
          title="Protein"
          value={result.protein}
          unit="g"
        />

        <NutritionCard
          icon="🌾"
          title="Carbohydrates"
          value={result.carbohydrates}
          unit="g"
        />

        <NutritionCard
          icon="🥑"
          title="Fat"
          value={result.fat}
          unit="g"
        />

        <NutritionCard
          icon="🌿"
          title="Fiber"
          value={result.fiber}
          unit="g"
        />

        <NutritionCard
          icon="🍬"
          title="Sugar"
          value={result.sugar}
          unit="g"
        />
      </div>

      <HealthScore score={result.healthScore} />

      {Array.isArray(result.ingredients) &&
        result.ingredients.length > 0 && (
          <section className="info-card">
            <h3>🥣 Detected Ingredients</h3>

            <div className="ingredient-list">
              {result.ingredients.map((ingredient, index) => (
                <span key={index}>
                  ✓ {ingredient}
                </span>
              ))}
            </div>
          </section>
        )}

      {Array.isArray(result.healthBenefits) &&
        result.healthBenefits.length > 0 && (
          <section className="info-card">
            <h3>💚 Potential Health Benefits</h3>

            <ul className="benefit-list">
              {result.healthBenefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </section>
        )}

      {result.recommendation && (
        <section className="recommendation-card">
          <div className="recommendation-icon">💡</div>

          <div>
            <h3>Nutrition Recommendation</h3>

            <p>{result.recommendation}</p>
          </div>
        </section>
      )}

      <p className="disclaimer">
        AI-generated nutritional values are estimates and may vary
        depending on ingredients, preparation method and serving size.
      </p>
    </section>
  );
}

export default NutritionDashboard;