import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 60000
});

export const analyzeFood = async (image) => {
  const formData = new FormData();

  formData.append("image", image);

  const response = await API.post(
    "/nutrition/analyze",
    formData
  );

  return response.data;
};