export const errorHandler = (err, req, res, next) => {
  console.error("Server error:", err);

  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({
      success: false,
      message: "Image size must be less than 5 MB."
    });
  }

  if (err.message === "Only image files are allowed.") {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }

  return res.status(500).json({
    success: false,
    message: "Unable to analyze the image. Please try again."
  });
};