import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';
import './Quotes.css';

function Quotes({ quotes }) {
  const quoteList = quotes.map(({ characterImage, characterName, quote }) => (
    <li key={quote}>
      <Quote 
        characterImage={characterImage}
        characterName={characterName}
        quote={quote}
      />
    </li>
  ));
  
  return (
    <ul>
      {quoteList}
    </ul>
  );
}

Quotes.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.shape({
    characterName: PropTypes.string.isRequired,
    characterImage: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired
  })).isRequired
};

export default Quotes;
