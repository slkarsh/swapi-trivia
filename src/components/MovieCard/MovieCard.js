import React from 'react';
import './MovieCard.scss';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import one from '../../images/1.jpg';
import two from '../../images/2.jpg';
import three from '../../images/3.jpg';
import four from '../../images/4.jpg';
import five from '../../images/5.jpg';
import six from '../../images/6.jpg';
import seven from '../../images/7.jpg';

const images = {
  1: one,
  2: two,
  3: three,
  4: four,
  5: five,
  6: six,
  7: seven
}

const MovieCard = ({ title, episode, releaseYear, filmId, getDetails }) => {
  return (
    <section
      className={`movie-card movie-card-${episode}`}
      classNameid={filmId}
      onClick={(e) => getDetails(filmId)}
    >
      <img
        src={images[episode]}
        className='poster-image'
        alt={`Episode ${episode} movie poster`}
      />
      <h3 onClick={(e) => console.log(e.target.id)}>{title}</h3>
      <p className='movie-card-text'>Episode {episode}</p>
      <p className='movie-card-text'>{releaseYear.slice(0, 4)}</p>
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