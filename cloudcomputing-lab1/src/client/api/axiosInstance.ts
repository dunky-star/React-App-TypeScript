import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "https://dni523ixjonzvn4ikzkvn7yngy0ilmff.lambda-url.us-east-2.on.aws/",
});

export default axiosInstance;
