import axios from "axios";
import { timeoutDuration } from './constants'


export const postApi = (endPoint, data, time = timeoutDuration) => {

    const url =  endPoint;
    return axios
        .post(`${url}`,{})
        .then((response) => {
            return response;
        })
        .catch((error) => error);
}

