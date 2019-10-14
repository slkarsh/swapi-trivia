import React from 'react';
import QuoteContainer from '../QuoteContainer/QuoteContainer';
import CharactersContainer from '../CharactersContainer/CharactersContainer';
import PropTypes from 'prop-types';

const SelectedMovie = ({ movie, characters, handleFavorite }) => {
  return (
    <main className='selected-movie'>
      <QuoteContainer movie={movie} />
      {!characters.length
        ? <img
          className='loading-image'
          src="https://cdn.dribbble.com/users/361263/screenshots/3051905/imperial_emblem.gif"
          alt="" />
        : <CharactersContainer characters={characters} handleFavorite={handleFavorite} />}
    </main>
  )
}

SelectedMovie.propTypes = {
  movie: PropTypes.object,
  characters: PropTypes.array
};

export default SelectedMovie;