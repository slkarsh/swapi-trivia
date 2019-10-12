import React from 'react';
import './MoviesContainer.scss';
import MovieCard from '../MovieCard/MovieCard';

const MoviesContainer = ({ films, getDetails }) => {
    return (
        <main>
            {films.map(film => {
                const { title, episode_id, release_date, filmId } = film
                return < MovieCard
                    key={episode_id}
                    title={title}
                    episode={episode_id}
                    releaseYear={release_date}
                    filmId={filmId}
                    getDetails={getDetails}
                />
            })}
        </main>
    )
}

export default MoviesContainer;