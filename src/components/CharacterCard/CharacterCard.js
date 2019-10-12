import React from 'react';
import './CharacterCard.scss';

const CharacterCard = ({name, homeworld, species, relatedFilms }) => {
    const filmsList = relatedFilms.map(film => {
        return <p className='character-films'>Title: {film}</p>
    })
    return (
        <article>
            <h4 className='character-name'>{name}</h4>
            <h5 className='character-species'>Species: {species}</h5>
            <p className='character-homeworld'>
                Homeworld: {homeworld.name}, Population: {homeworld.population}
            </p>
            <p>{filmsList}</p>
        </article>
    )
}

export default CharacterCard;