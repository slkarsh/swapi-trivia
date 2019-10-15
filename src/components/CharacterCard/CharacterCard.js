import React from 'react';
import './CharacterCard.scss';
import PropTypes from 'prop-types';

const CharacterCard = ({ name, species, homeworldName, homeworldPop, relatedFilms, handleFavorite, checkFavorites }) => {
  const filmsList = relatedFilms.map((film, index) => {
    return (
      <li
        key={index}
        className='character-movie-list'>- {film}
      </li>
    )
  })

  const componentHandler = checkFavorites({ name, species, homeworldName, homeworldPop, relatedFilms })
    ? 'Remove from favorites'
    : 'Add to favorites'

  return (
    <article className='character-info'>
      <h5 className='character-name'>{name}</h5>
      <hr />
      <h5 className='character-species'>species: <span>{species}</span></h5>
      <h5 className='character-species'> homeworld: <span>{homeworldName}</span></h5>
      <h5 className='character-species'>population: <span>{homeworldPop}</span> </h5>
      <h5 className='character-rel-movies'>appears in: {filmsList}</h5>
      <button
        className='button-favorite'
        onClick={() => handleFavorite({ name, species, homeworldName, homeworldPop, relatedFilms })}>
        {componentHandler}
      </button>
    </article>
  )
}

CharacterCard.propTypes = {
  name: PropTypes.string,
  species: PropTypes.array,
  homeworldName: PropTypes.string,
  homeworldPop: PropTypes.string,
  relatedFilms: PropTypes.array,
  handleFavorite: PropTypes.func,
  checkFavorites: PropTypes.func
};

export default CharacterCard;