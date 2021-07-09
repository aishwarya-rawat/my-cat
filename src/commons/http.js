import axios from "axios";

const x_api_key = "c63b7dc1-da40-470d-a00d-9a6e0d99fc73";

export default axios.create({
  baseURL: "https://api.thecatapi.com/v1/",
  headers: {
    "Content-type": "application/json",
    'x-api-key': x_api_key
  }
});