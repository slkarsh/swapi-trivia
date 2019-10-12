import React from 'react';
import './CharactersContainer.scss';
import CharacterCard from '../CharacterCard/CharacterCard'

const CharactersContainer = ({ characters }) => {
    return (
        <section className='characters-cont'>
            {characters.map((character, index) => {
                const { name, species, homeworld, relatedFilms } = character;
                return <CharacterCard
                    key={index}
                    name={name}
                    species={species}
                    homeworldName={homeworld.name}
                    homeworldPop={homeworld.population}
                    relatedFilms={relatedFilms}
                />
            })}
        </section>
    )
}

export default CharactersContainer