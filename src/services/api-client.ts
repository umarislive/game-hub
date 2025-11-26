import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "90a1896b050249fbbf8f9fbc48dee5f1",
  },
});
