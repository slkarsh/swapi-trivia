import React from 'react';
import './Favorites.scss';
import CharactersContainer from '../CharactersContainer/CharactersContainer';
import PropTypes from 'prop-types';

const Favorites = ({ favorites }) => {
  return (
    <section>
      <h1>Favorite</h1>
      <CharactersContainer characters={favorites} />
    </section>
  )
}

Favorites.propTypes = {
  favorites: PropTypes.array,
};

export default Favorites;