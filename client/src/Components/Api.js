import axios from "axios";

const baseURL = "https://blood-donation-backend-alpha.vercel.app";

export default axios.create({ baseURL: baseURL });
