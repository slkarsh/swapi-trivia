import React from 'react';
import './Quote.scss';
import PropTypes from 'prop-types';

const Quote = ({ episode, title, opening }) => {
  return (
    <div className="galaxy">
      <div className="fall">
        <p>
          <i>{episode}. {title.toUpperCase()}</i>
          {opening}
        </p>
      </div>
    </div>
  )
}

Quote.propTypes = {
  episode: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string
};

export default Quote