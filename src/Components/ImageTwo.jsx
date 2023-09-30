import React from 'react';
import Tomato from '../Assets/tomato.svg';

const ImageTwo = ({ movie }) => {
  return (
    <div>
      <div>
        {/* Display the movie title */}
        {movie ? (
          <div className='flex items-center pt-3 gap-3'>
            <img src={Tomato} className='w-[30px]' alt="" />
            <p className='text-md md:text-lg text-black   font-bold'>{movie.vote_count}</p>
          </div>
        ) : (
          'Loading...'
        )}
      </div>
    </div>
  );
};

export default ImageTwo;
