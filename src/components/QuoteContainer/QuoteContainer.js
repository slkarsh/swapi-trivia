import React from 'react';
import './QuoteContainer.scss';
import Quote from '../Quote/Quote'

const QuoteContainer = ({ movie }) => {
    return (
        <section className='quote-container'>
            <h3>{movie.title}</h3>
            <Quote />
        </section>
    )
}

export default QuoteContainer;