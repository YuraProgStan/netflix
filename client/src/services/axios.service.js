import axios from "axios";
import baseURL from "../configs/urls";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use(config => {
    // const token = localStorage.getItem('token');
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGExMDQ3NDA2MTgwZTFiZDFjNWRlNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzcyMTQ2NSwiZXhwIjoxNjU0MTUzNDY1fQ.wvWqMWGw9wPmDmnZWlr5_ePaWTsCGy3cOMKh1RSRhaA';
    if (token) {
        config.headers.token = `Bearer ${token}`;
    }
    return config;
})
export {
    axiosService
}