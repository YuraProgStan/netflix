import {axiosService} from "./axios.service";
import baseURL from "../configs/urls";

export const movieService = {
    getAll: (item) => axiosService.get(`${baseURL}/movies/find/${item}`),

    getRandom: (type) => axiosService.get(`${baseURL}/movies/random?type=${type}`)

}