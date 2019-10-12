import React from 'react';
import './CharactersContainer.scss';
import CharacterCard from '../CharacterCard/CharacterCard'

const CharactersContainer = ({ characters }) => {

    const displayCharacters = () => {
        characters.map(character => {
            return <CharacterCard info={character} />
        })
    }

    return (
        <section>
            <h1>Characters</h1>
            <h3>characters cards render here</h3>
            {displayCharacters}
        </section>
    )
}

export default CharactersContainer