// src/components/Card.js

import React from 'react';
import './Card.css';

const Card = ({ word, forbidden }) => {
    return (
        <div className="card centered">
            <h1 className="main-word">{word.toUpperCase()}</h1>
            <div className="forbidden-words">
                {forbidden.map((word, index) => (
                    <p key={index} className="forbidden-word">{word.toUpperCase()}</p>
                ))}
            </div>
        </div>
    );
};

export default Card;
