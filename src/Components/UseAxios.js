import axios from 'axios'


const UseAxios = axios.create({
   baseURL : `https://api.themoviedb.org/3`
})

export  default UseAxios