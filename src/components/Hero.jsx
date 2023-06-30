import { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import tmdb from '../api/tmdb';
import { Carousel } from 'react-responsive-carousel';


function Hero() {

  const [hero, setHero] = useState([]);

  useEffect(() => {
    // fetch action 
    const fetchMovies = async () => {
      const { data } = await tmdb.get("movie/now_playing")
      setHero(data.results);
    }

    fetchMovies()
  }, []);



  return (
    <div className="mx-5">
      <Carousel showThumbs={false}
        showIndicators={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        className="d-flex my-5">
        {hero.map((movie, index) => {
          return (
            <div key={index}{...movie} > </div>
          )
        })}
      </Carousel>
    </div>

  )
}

export default Hero