import React from 'react';
import './Favorites.scss';
import CharactersContainer from '../CharactersContainer/CharactersContainer';
import PropTypes from 'prop-types';
import CharacterCard from '../CharacterCard/CharacterCard';

const Favorites = ({ favorites, handleFavorite, checkFavorites }) => {

  const favoriteCards =
    favorites.map((favorite, index) => {
      const { name, species, homeworldName, homeworldPop, relatedFilms } = favorite;
      return <CharacterCard
        key={index}
        name={name}
        species={species}
        homeworldName={homeworldName}
        homeworldPop={homeworldPop}
        relatedFilms={relatedFilms}
        handleFavorite={handleFavorite}
        checkFavorites={checkFavorites}
      />
    });

  return (
    <section>
      <h1>Favorite Characters</h1>
      {
        favorites.length
          ? favoriteCards
          : <h2 className='add-characters'>Add characters in the movie section</h2>
      }
    </section>
  )
}

Favorites.propTypes = {
  favorites: PropTypes.array,
};

export default Favorites;