import React from 'react';
import './CharactersContainer.scss';
import CharacterCard from '../CharacterCard/CharacterCard'

const CharactersContainer = ({ characters }) => {
    return (
        <>
            <CharacterCard characters={characters} />
        </>
    )
}

export default CharactersContainer