import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  // Get the movie ID from the URL parameter
  const { id } = useParams();

  // State to store the movie details
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie data based on the ID
    axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
      params: {
        api_key: 'cfcc55e83af2fc8c1fc51a68f3221eea',
        language: 'en-US',
      },
    })
    .then((response) => {
      // Update the 'movie' state with the fetched data
      setMovie(response.data);
    })
    .catch((error) => {
      console.error('Error fetching movie details', error);
    });
  }, [id]); // Include 'id' as a dependency to re-fetch data when the ID changes

  return (
    <div>
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
          <h3>dwhbwiqfbioqfio</h3>
          <p>Release Date: {movie.release_date}</p>
          <p>Overview: {movie.overview}</p>
          {/* Other movie details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
