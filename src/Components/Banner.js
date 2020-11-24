import React, { useState , useEffect} from 'react'
import UseAxios from './UseAxios'
import requests from './request'
import './Banner.css'
import NavBar1 from './NavBar1'
const Banner = () => {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData () {
            const requestData = await UseAxios.get(requests.fetchNetflixOriginals)
            const getMovie = requestData.data.results[Math.floor(Math.random() * requestData.data.results.length - 1)]
            setMovie(getMovie)
        }
        fetchData()
        
    }, [])
    
    // slice the string passed to the function
    const sliceDesc = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + " ...." : str;
    }

    return (
        <header className="banner" style={{
            backgroundSize: 'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
            
            
        }}><section>
                <NavBar1 />
                <div className="banner__content">
                
                <h1 className="banner__h1">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className='banner__butoons'>
                    <button className='banner__button'>
                        Play
                    </button>
                    <button className='banner__button'>
                        My List
                    </button>   
                </div>
                <p className='banner__description'>
                    {sliceDesc(movie?.overview, 200)}
                </p>
            </div>
        </section>
            
            
        </header>
    )
}

export default Banner
