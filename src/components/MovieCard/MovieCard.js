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
  1: [one, 'https://www.youtube.com/watch?v=bD7bpG-zDJQ', 'https://www.amazon.com/Star-Wars-Episode-Phantom-Widescreen/dp/B00003CX5P'],
  2: [two, 'https://www.youtube.com/watch?v=gYbW1F_c9eM', 'https://www.amazon.com/Star-Wars-Episode-Attack-Widescreen/dp/B00006HBUJ'],
  3: [three, 'https://www.youtube.com/watch?v=5UnjrG_N8hU', 'https://www.amazon.com/Star-Wars-Episode-Revenge-Widescreen/dp/B00005JLXH'],
  4: [four, 'https://www.youtube.com/watch?v=MpkrMqmmy5k', 'https://www.amazon.com/Star-Wars-Episode-IV-Limited/dp/B000FQJAIW'],
  5: [five, 'https://www.youtube.com/watch?v=xESiohGGP7g', 'https://www.amazon.com/Star-Wars-Empire-Strikes-Limited/dp/B000FQJAJG'],
  6: [six, 'https://www.youtube.com/watch?v=MYD_xxY5wEI', 'https://www.amazon.com/Star-Wars-Episode-VI-Limited/dp/B000FQVX78'],
  7: [seven, 'https://www.youtube.com/watch?v=sGbxmsDFVnE', 'https://www.amazon.com/Star-Wars-Episode-2Blu-Ray-subtitles/dp/B01EFU2GKC']
}

const MovieCard = ({ title, episode, releaseYear, filmId, getDetails }) => {
  return (
    <section
      className={`movie-card movie-card-${episode}`}
      classNameid={filmId}
      onClick={(e) => getDetails(filmId)}
    >
      <img
        src={images[episode][0]}
        className='poster-image'
        alt={`Episode ${episode} movie poster`}
      />
      <h3 onClick={(e) => console.log(e.target.id)}>{title}</h3>
      <p className='movie-card-text'>Episode {episode}</p>
      <p className='movie-card-text'>{releaseYear.slice(0, 4)}</p>
      <a className='text-link' href={images[episode][2]}>Buy Movie</a>
      <a className='text-link' href={images[episode][1]}>Watch Trailer</a>
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