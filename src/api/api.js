import axios from "axios";
const api = axios.create({
    baseURL: "https://64edbef81f8721827141ae4d.mockapi.io/",
});

export default api;