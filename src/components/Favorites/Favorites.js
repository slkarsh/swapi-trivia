import React from 'react';
import './Favorites.scss';
import CharactersContainer from '../CharactersContainer/CharactersContainer';
import PropTypes from 'prop-types';
import CharacterCard from '../CharacterCard/CharacterCard';

const Favorites = ({ favorites, handleFavorite }) => {
  return (
    <section>
      <h1>Favorite</h1>
      {favorites.map((favorite, index) => {
        const { name, species, homeworldName, homeworldPop, relatedFilms } = favorite;
        return <CharacterCard
          key={index}
          name={name}
          species={species}
          homeworldName={homeworldName}
          homeworldPop={homeworldPop}
          relatedFilms={relatedFilms}
          handleFavorite={handleFavorite}
        />
      })}
    </section>
  )
}

Favorites.propTypes = {
  favorites: PropTypes.array,
  handleFavorite: PropTypes.func
};

export default Favorites;