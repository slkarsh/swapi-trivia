import React from 'react';
import './MoviesContainer.scss';
import MovieCard from '../MovieCard/MovieCard';

const MoviesContainer = ({ films }) => {
    return (
        <main>
            {films.map(film => {
                const { title, episode_id, release_date } = film
                return < MovieCard
                    key={episode_id}
                    title={title}
                    episode={episode_id}
                    releaseYear={release_date}
                />
            })}
        </main>
    )
}

export default MoviesContainer;