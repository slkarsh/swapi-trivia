import React from 'react';
import QuoteContainer from '../QuoteContainer/QuoteContainer';
import CharactersContainer from '../CharactersContainer/CharactersContainer';


const SelectedMovie = ({ movie, characters }) => {
    return (
        <main className='selected-movie'>
            <QuoteContainer movie={movie} />
            <CharactersContainer characters={characters} />
        </main>
    )
}

export default SelectedMovie;