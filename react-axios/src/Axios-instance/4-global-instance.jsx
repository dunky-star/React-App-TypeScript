import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://www.course-api.com",
});

export default AxiosInstance;
