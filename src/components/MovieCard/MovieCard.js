import React from 'react';
import './MovieCard.scss';
import { Link } from 'react-router-dom'

const MovieCard = ({ title, episode, releaseYear }) => {
  return (
    <section>
      <h3>{title}</h3>
      <p>{episode}</p>
      <p>{releaseYear}</p>
      <Link to={`/movies/${episode}`} className='character-link'>View Characters</Link>
    </section>
  )
}

export default MovieCard;