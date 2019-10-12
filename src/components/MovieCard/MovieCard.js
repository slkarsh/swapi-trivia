import React from 'react';
import './MovieCard.scss';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const MovieCard = ({ title, episode, releaseYear, filmId, getDetails }) => {
  return (
    <section className='movie-card' id={filmId} onClick={(e) => getDetails(filmId)}>
      <h3 onClick={(e) => console.log(e.target.id)}>{title}</h3>
      <p className='movie-card-text'>{episode}</p>
      <p className='movie-card-text'>{releaseYear}</p>
      <Link to={`/movies/${episode}`} className='character-link'>View Characters</Link>
    </section>
  )
}

MovieCard.propTypes = {
  title: PropTypes.string,
  episode: PropTypes.number,
  releaseYear: PropTypes.string,
  filmId: PropTypes.number,
  getDetails: PropTypes.func
};

export default MovieCard;