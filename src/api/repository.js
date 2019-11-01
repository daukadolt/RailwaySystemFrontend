import axios from "axios";

const baseDomain = process.env.VUE_APP_API_URL;
const baseURL = `${baseDomain}/api`;

export default axios.create({
    baseURL
});