const API_KEY = 'a67d0ff54b82c33be57851e07b2512a3'

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
//https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US
//https://api.themoviedb.org/3/genre/tv/list?api_key=<<api_key>>&language=en-US



const request = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`

    
}
export default request