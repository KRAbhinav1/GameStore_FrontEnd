import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"https://gamestore-backend-u2p3.onrender.com",
    withCredentials: true
})