import React from 'react';
import './CharacterCard.scss';
import PropTypes from 'prop-types';

const CharacterCard = ({ name, species, homeworldName, homeworldPop, relatedFilms, handleFavorite }) => {
    const filmsList = relatedFilms.map(film => {
        return (
            <li className='character-movie-list'>- {film}</li>
        )
    })
    return (
        <article className='character-info'>
            <h5 className='character-name'>{name}</h5>
            <hr />
            <h5 className='character-species'>species: <span>{species}</span></h5>
            <h5 className='character-species'> homeworld: <span>{homeworldName}</span></h5>
            <h5 className='character-species'>population: <span>{homeworldPop}</span> </h5>
            <h5 className='character-rel-movies'>appears in: {filmsList}</h5>
            <button className='button-favorite' onClick={() => handleFavorite({ name, species, homeworldName, homeworldPop, relatedFilms })}>
                Add to favorites
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
};

export default CharacterCard;