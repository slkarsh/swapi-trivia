import React from 'react';
import './MovieCard.scss';

const MovieCard = ({ title, episode, releaseYear }) => {
  return (
    <section>
      <h3>{title}</h3>
      <p>{episode}</p>
      <p>{releaseYear}</p>
    </section>
  )
}

export default MovieCard;