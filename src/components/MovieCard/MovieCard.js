import React from 'react';
import './MovieCard.scss';
import { Link } from 'react-router-dom'

const MovieCard = ({ title, episode, releaseYear }) => {
  return (
    <section className='movie-card'>
      <h3>{title}</h3>
      <p className='movie-card-text'>Episode {episode}</p>
      <p className='movie-card-text'>{releaseYear}</p>
      <Link to={`/movies/${episode}`} className='character-link'>View Characters</Link>
    </section>
  )
}

export default MovieCard;