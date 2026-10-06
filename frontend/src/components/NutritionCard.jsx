function NutritionCard({ icon, title, value, unit }) {
  return (
    <article className="nutrition-card">
      <div className="nutrition-card-icon">{icon}</div>

      <div>
        <p>{title}</p>

        <h3>
          {value ?? 0}
          <span>{unit}</span>
        </h3>
      </div>
    </article>
  );
}

export default NutritionCard;