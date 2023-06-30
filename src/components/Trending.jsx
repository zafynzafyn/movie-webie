import { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import tmdb from '../api/tmdb';
import { Carousel } from 'react-responsive-carousel';
import MovieCard from './MovieCard';

function Trending() {

  const [trending, setTrending] = useState([]);

  useEffect(() => {
    // fetch action 
    const fetchMovies = async () => {
      const { data } = await tmdb.get("movie/popular")
      setTrending(data.results);
    }

    fetchMovies()
  }, []);
  return (

    <div className="mx-5 d-flex px-5">
      <h4>Trending</h4>
      {trending.map((movie, index) => {
        return (
          <MovieCard key={index}{...movie} ></MovieCard>
        )

      })}
    </div>

  )
}




export default Trending