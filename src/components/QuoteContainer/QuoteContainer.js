import React from 'react';
import './QuoteContainer.scss';
import Quote from '../Quote/Quote';
import PropTypes from 'prop-types';

const QuoteContainer = ({ movie }) => {
  const { episode_id, title, description, opening_crawl } = movie;
  return (
    <section className='quote-container'>
      <Quote
        episode={episode_id}
        opening={opening_crawl}
        title={title}
        description={description}
      />
    </section>
  )
}

QuoteContainer.propTypes = {
  movie: PropTypes.object,
  episode_id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string
};

export default QuoteContainer;