import React, {useState, useEffect} from 'react';
import UseAxios from './UseAxios'
import "./Rows.css"


export default function Rows({title, fetchURL}) {
  const [movies, setMovies] = useState([])
  

  // to make asynchronious request we must use the async fxn
  useEffect(()=>{
    async function fetchData() {
      const request = await UseAxios.get(fetchURL)
      setMovies(request.data.results)
      
    }
    fetchData()
  }, [fetchURL])
  //console.table(movies)
  return (
    <section className='container'>
      <h2>{title}</h2>
      <article className='row'>
        {movies.map((movie) => {
          return (
          <img className="imgEffect" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.name||movie.title} key={movie.id}/>
          
        )
        })}
        
      </article>
      
    </section>
  );
}
