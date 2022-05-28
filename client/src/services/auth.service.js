import {axiosService} from "./axios.service";
import baseURL, {urls} from "../configs/urls";

export const authService= {
    register: (user) => axiosService.post(`${baseURL}${urls.auth}/register`, user),
    login: (user) => axiosService.post(`${baseURL}${urls.auth}/login`, user),
}