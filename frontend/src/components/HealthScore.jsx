function HealthScore({ score }) {
  const healthScore = Math.min(
    Math.max(Number(score) || 0, 0),
    100
  );

  let message = "Consider healthier alternatives.";

  if (healthScore >= 80) {
    message = "Excellent nutritional choice.";
  } else if (healthScore >= 60) {
    message = "Good choice with some room for improvement.";
  } else if (healthScore >= 40) {
    message = "Moderate nutritional value.";
  }

  return (
    <section className="health-card">
      <div className="health-header">
        <div>
          <p className="eyebrow">NUTRITION QUALITY</p>
          <h3>Health Score</h3>
        </div>

        <div className="health-score">
          {healthScore}
          <span>/100</span>
        </div>
      </div>

      <div className="progress-track">
        <div
          className="progress-bar"
          style={{ width: `${healthScore}%` }}
        />
      </div>

      <p className="health-message">{message}</p>
    </section>
  );
}

export default HealthScore;