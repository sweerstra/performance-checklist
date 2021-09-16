import axios from "axios";

const AUTHORIZATION = process.env.AUTHORIZATION;
const STACK_API_KEY = process.env.STACK_API_KEY;

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: "https://api.contentstack.io/v3/content_types",
  headers: {
    api_key: STACK_API_KEY,
    authorization: AUTHORIZATION,
  },
});

export default instance;
