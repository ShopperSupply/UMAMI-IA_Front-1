import axios from "axios"


const api = axios.create({
    baseURL: "http://localhost:8000/api",
    // baseURL:"https://umami-ia-production.up.railway.app/api",
});

export default api
