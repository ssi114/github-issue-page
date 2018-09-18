
import { BaseUrl } from './constantApi';


let user = "redux-saga";
let repositorie = "redux-saga";

const fetchApi = (endPoint) => {
    return fetch(BaseUrl + endPoint.getUrl(user, repositorie), {
        method: endPoint.method,
    }).then(response => response.json());
}

export default fetchApi;