import React, {useState, useEffect} from 'react';
import UseAxios from './UseAxios'
import movieTrailer from "movie-trailer"
import YouTube from 'react-youtube'
import "./Rows.css"


function Rows({title, fetchURL, isLargeRow}) {
  const [movies, setMovies] = useState([])
  const [urlTrailer, setUrlTrailer] = useState("")

// options for the youtube player
  const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 1,
      },
    };

  // to make asynchronious request we must use the async fxn
  useEffect(()=>{
    async function fetchData() {
      const request = await UseAxios.get(fetchURL)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchURL])

  const handleClick = (movie) => {
    if (urlTrailer) {
      setUrlTrailer('')
    } else {
    // get the movie trailer id passed in here
    movieTrailer(movie.name || movie.title || "" )
      .then((response) => {
        // Get the movie Id and asign it to movie UrlTrailer
        console.log(response)
        const id = new URL(response).search
        const url = new URLSearchParams(id)
        setUrlTrailer(url.get('v'))
        
      })
      .catch((error) => console.log(error))
      
    }
  }
  


  //console.log(movies)
  return (
    <section className='container'>
      <h2>{title}</h2>
      <article className='row'>
        {movies.map((movie) => (
          <img onClick={()=>handleClick(movie)} className={`imgEffect ${isLargeRow && 'imgEffect2'}`} src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${isLargeRow ? movie.poster_path : movie.poster_path}`} alt={movie.name||movie.title} key={movie.id}/>
        ))}
        
      </article>
      
      {urlTrailer && <YouTube videoId={urlTrailer} opts={opts} />}
    </section>
  );
}

export default Rows