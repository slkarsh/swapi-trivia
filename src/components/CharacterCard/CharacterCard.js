import React from 'react';
import './CharacterCard.scss';

const CharacterCard = ({ name, species, homeworldName, homeworldPop, relatedFilms }) => {
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
            <div className='character-footer'>
                Add {name} to favorites
            </div>
        </article>
    )
}

export default CharacterCard;