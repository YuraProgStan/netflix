import {axiosService} from "./axios.service";
import baseURL, {urls} from "../configs/urls";

export const listService= {
    getAll: (type, genre ) => axiosService.get(`${baseURL}${urls.lists}${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`)

}