import axios from "axios";

const AxiosClient = axios.create({
  baseURL: process.env.REACT_APP_ENV_API_URL,
  timeout: 5000,
  headers: {
    "x-api-key": process.env.REACT_APP_ENV_API_KEY,
  },
});

export default AxiosClient;
