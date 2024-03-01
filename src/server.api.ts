import axios from "axios"

export const api = axios.create({
    baseURL: "https://expo-api-routes-marcosdev.vercel.app/"
});
