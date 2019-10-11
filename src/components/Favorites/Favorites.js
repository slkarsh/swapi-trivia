import React from 'react';
import './Favorites.scss';
import CharactersContainer from '../CharactersContainer/CharactersContainer';

const Favorites = ({ favorites }) => {
  return (
    <section>
      <h1>Favorite</h1>
      <CharactersContainer characters={favorites} />
    </section>
  )
}

export default Favorites;