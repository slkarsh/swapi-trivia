import React from 'react';
import './QuoteContainer.scss';
import Quote from '../Quote/Quote'

const QuoteContainer = () => {
    return (
        <section className='quote-container'>
            <h3>HERE'S A QUOTE!!</h3>
            <Quote />
        </section>
    )
}

export default QuoteContainer;