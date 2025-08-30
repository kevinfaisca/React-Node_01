import axios from 'axios'

//Base URL: https://api.themoviedb.org/3/
//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=dc65bd6cd0350c6459501785623cceaa&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})
export default api