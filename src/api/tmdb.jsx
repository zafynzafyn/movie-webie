import axios from "axios";

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: "application/json"
    },
    params: {
        api_key: '0e9363d08153bcdb6bd9f170e1770159'
    }
})