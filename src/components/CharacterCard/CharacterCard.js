import React from 'react';
import './CharacterCard.scss';
import PropTypes from 'prop-types';

const CharacterCard = ({ name, species, homeworldName, homeworldPop, relatedFilms }) => {
    return (
        <article className='character-info'>
            <h5 className='character-name'>{name}</h5>
            <h5 className='character-species'>Species: {species}</h5>
            <h5 className='character-homeworld'>Homeworld Name: {homeworldName}, population: {homeworldPop}</h5>
            <p className='character-rel-movies'>Related movies: {relatedFilms}</p>
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