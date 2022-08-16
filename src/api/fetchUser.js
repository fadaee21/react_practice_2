import axios from "axios";


export const fetchUser = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        Accept: 'application/json'
    }

})



