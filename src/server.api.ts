import axios from "axios"

export const api = axios.create({
    baseURL: "https://expo-api-routes-sandy.vercel.app/"
})