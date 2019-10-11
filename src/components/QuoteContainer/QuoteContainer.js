import React from 'react';
import './QuoteContainer.scss';
import Quote from '../Quote/Quote'

const QuoteContainer = ({ movie }) => {
    return (
        <section className='quote-container'>
            <Quote
                episode={movie.episode_id}
                title={movie.title}
                description={movie.description}
            />
        </section>
    )
}

export default QuoteContainer;