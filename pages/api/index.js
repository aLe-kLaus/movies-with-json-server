import axios from "axios";

export const API = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/aLe-kLaus/movies-with-json-server",
});
