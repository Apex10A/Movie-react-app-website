import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from './Navigaton';
import ImageOne from './ImageOne';
import ImageTwo from './ImageTwo';
import HomeButton from './HomeButton';
import MovieCard from './Release/HomeCard.jsx'

const Home = () => {
  //movies is the initial state, setMovies is the updating state
  const [movies, setMovies] = useState([]);

  const [currentMovie, setCurrentMovie] = useState(null);

  const [movieData, setMovieData] = useState(null);

//backgroundImage is the initial state, setBackgrounImage is the updating state
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: 'cfcc55e83af2fc8c1fc51a68f3221eea',
        language: 'en-US',
        page: 1,
      },
  }).then((response) => {
    //extract the top 15 first movies from the API response
    const topMovies = response.data.results.slice(0, 15);

    //set the data to the movies state
    setMovies(topMovies);

    const randomMovie = topMovies[Math.floor(Math.random() * topMovies.length)];
    setCurrentMovie(randomMovie);

    // Set the background image URL to the backdrop of the random movie
    setBackgroundImage(`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`);
  })
  .catch((error) => {
    console.error('error fetching movies');
  });
}, []);
  return (
    <div>
      <div className=''
    id="home-container"
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}
  >
    {/* Semi-transparent overlay */}
    <div className="overlay"></div>

    {/* Navigation component */}
    <Navigation />

    {/* Movie information */}
    <div className="px-8 md:px-[50px] md:pt-[40px]">
    <div className=" absolute top-[40%]">
        {currentMovie ? (
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white">{currentMovie.title}</h2>
            <p className='text-white opacity-[0.7] md:text-md pt-4 lg:pt-7 w-[100%] max-w-[400px] md:w-[100%] md:max-w-[700px] md:text-lg '>{currentMovie.overview}</p>
          </div>
        ) : (
          'Loading...'
        )}

        <div className='flex space-between items-center gap-[50px]'>
        <ImageOne movie={currentMovie}/>
        <ImageTwo movie={currentMovie} />
        </div>

        <div>
          <HomeButton/>
        </div>

      </div>   
    </div>
  </div>

  <div>
      <MovieCard/>
    </div>
    
    </div>
  );
};

export default Home;
