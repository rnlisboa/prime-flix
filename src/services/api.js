// baseURL: https://api.themoviedb.org/3/
//movie/550?api_key=7c61b3e96f7cd741cd6476fbe743dba9&language=pt-BR


import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;