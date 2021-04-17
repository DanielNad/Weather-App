import axios from "axios";

const accuweather = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: {
    apikey: process.env.REACT_APP_API_KEY,
  },
});

export default accuweather;
