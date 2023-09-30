import React from 'react';
import Imbd from '../Assets/imdb.svg';

const ImageOne = ({ movie }) => {
  return (
    <div>
      <div>
        {/* Display the movie title */}
        {movie ? (
          <div className='flex items-center pt-3 gap-3'>
            <img src={Imbd} className='w-[50px]' alt="" />
            <p className='text-md text-black font-bold text-md md:text-lg'>{movie.vote_average}</p>
          </div>
        ) : (
          'Loading...'
        )}
      </div>
    </div>
  );
};

export default ImageOne;
