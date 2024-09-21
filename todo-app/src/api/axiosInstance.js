import axios from "axios";
export const APInstance = axios.create({
  baseURL: "http://localhost:9191",
  timeout: 5000,
  // headers: { "X-Custom-Header": "foobar" },
});
