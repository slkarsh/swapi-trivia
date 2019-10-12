import React from 'react';
import QuoteContainer from '../QuoteContainer/QuoteContainer';
import CharactersContainer from '../CharactersContainer/CharactersContainer';
import PropTypes from 'prop-types';

const SelectedMovie = ({ movie, characters }) => {
  return (
    <main className='selected-movie'>
      <QuoteContainer movie={movie} />
      <CharactersContainer characters={characters} />
    </main>
  )
}

SelectedMovie.propTypes = {
  movie: PropTypes.object,
  characters: PropTypes.array
};

export default SelectedMovie;