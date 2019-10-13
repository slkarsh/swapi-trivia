import React from 'react';
import './CharacterCard.scss';
import PropTypes from 'prop-types';

const CharacterCard = ({ name, species, homeworldName, homeworldPop, relatedFilms, addFavorite, removeFavorite }) => {
    const filmsList = relatedFilms.map(film => {
        return (
                <li className='character-movie-list'>{film}</li>
        )
    })
    return (
        <article className='character-info'>
            <h5 className='character-name'>{name}</h5>
            <hr />
            <h5 className='character-species'>species: <span>{species}</span></h5>
            <h5 className='character-homeworld'>
                homeworld: <span>{homeworldName}</span>
                <br /> 
                population: <span>{homeworldPop}</span> </h5>
            <h5 className='character-rel-movies'>appears in: {filmsList}</h5>
            <div className='character-footer' onClick={() => addFavorite({ name, species, homeworldName, homeworldPop, relatedFilms})}>
                Add {name} to favorites 
            </div>
            <div className='footer-remove' onClick={() => removeFavorite({ name, species, homeworldName, homeworldPop, relatedFilms})}>
              Remove {name} from favorites
            </div>
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