const { default: axios } = require("axios");
const axiosUrl = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
});

export default axiosUrl;
