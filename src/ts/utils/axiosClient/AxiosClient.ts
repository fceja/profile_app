import axios from "axios";

const AxiosClient = axios.create({
  baseURL: process.env.REACT_APP_EMAILER_API_URL,
  timeout: process.env.REACT_APP_AXIOS_TIMEOUT
    ? parseInt(process.env.REACT_APP_AXIOS_TIMEOUT)
    : 30000,
  headers: {
    "x-api-key": process.env.REACT_APP_EMAILER_API_KEY,
  },
});

export default AxiosClient;
