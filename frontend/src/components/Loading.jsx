function Loading() {
  return (
    <section className="loading-card">
      <div className="spinner"></div>

      <h2>Analyzing your food...</h2>

      <p>
        AI is identifying the food and estimating calories,
        nutrients and health information.
      </p>

      <div className="loading-steps">
        <span>Image processing</span>
        <span>Food identification</span>
        <span>Nutrition estimation</span>
      </div>
    </section>
  );
}

export default Loading;