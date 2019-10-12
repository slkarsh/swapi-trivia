import React from 'react';
import './Quote.scss';

const Quote = ({ episode, title, description }) => {
    return (
        <div className="galaxy">
            <div className="fall">
                <p>
                    <i>{episode}. {title.toUpperCase()}</i>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Quote