import axios from 'axios';
import { BASE_API } from '../shared/constants';

export function GetData(endpoint){
    let url = BASE_API+endpoint

    return new Promise((resolve) => {
        axios.get(url)
        .then((response) => {
            resolve(response);
        })
        .catch((error) => {
            resolve(error.response);
        });
    });
    
}