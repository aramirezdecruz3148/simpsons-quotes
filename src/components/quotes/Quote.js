import React from 'react';
import PropTypes from 'prop-types';

function Quote({ characterImage, characterName, quote }) {
  return (
    <section>
      <h3>{characterName}</h3>
      <img src={characterImage} alt={characterName} />
      <pre>{quote}</pre>
    </section>
  );
}

Quote.propTypes = {
  characterName: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired
};

export default Quote;
