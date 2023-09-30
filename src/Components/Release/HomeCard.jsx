import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageOne from '../ImageOne';
import ImageTwo from '../ImageTwo';
import Footer from './Footer.jsx';
import { Link, useHistory } from 'react-router-dom';

const HomeCard = () => {
  const [movies, setMovies] = useState([]);
  const [movieData, setMovieData] = useState(null);
  const history = useHistory();

  const handleCardClick = (movieId) => {
    // Navigate to the MovieDetails component with the specific movie's ID as a URL parameter
    history.push(`/movies/${movieId}`);
  };

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/movie/top_rated', {
        params: {
          api_key: 'cfcc55e83af2fc8c1fc51a68f3221eea',
          language: 'en-US',
          page: 1,
        },
      })
      .then((response) => {
        // Extract the top 15 first movies from the API response
        const getTopMovies = response.data.results.slice(0, 15);

        // Set the data to the movies state
        setMovies(getTopMovies);
        console.log(movies);

        // Select a random movie from the top movies
        const randomMovie = getTopMovies[Math.floor(Math.random() * getTopMovies.length)];

        // Set the random movie data to the movieData state
        setMovieData(randomMovie);
      })
      .catch((error) => {
        console.error('Error fetching movies', error);
      });
  }, []);

  return (
    <div className='px-8 md:px-[50px] pt-4 md:pt-[40px]'>
      <div>
        <div>
          <h2 className='font-bold opacity-[0.8] text-xl lg:text-2xl '>New Releases</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {movies.map((movie) => (
            <div key={movie.id} className='mb-20'>
              <Link to={`/movies/${movie.id}`}>
                <img
                  className='rounded-md'
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.title}
                />
                <div>
                  {/* Display the title of the movie */}
                  <p>{movie.genre}</p>
                  <h2 className='font-bold text-xl pt-4'>{movie.title}</h2>
                </div>
              </Link>

              <div className='flex items-center gap-10'>
                <div>
                  <ImageOne movie={movie} />
                </div>

                <div>
                  <ImageTwo movie={movie} />
                </div>
              </div>

              <div>
                <p>Release Date in (UTC): </p>
              </div>

              <button onClick={() => handleCardClick(movie.id)}>View Details</button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomeCard;
