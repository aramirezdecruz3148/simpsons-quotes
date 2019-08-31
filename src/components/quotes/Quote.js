import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';

function Quote({ characterImage, characterName, quote }) {
  return (
    <section className={styles.section}>
      <h3>{characterName}</h3>
      <img src={characterImage} alt={characterName} />
      <p>{quote}</p>
    </section>
  );
}

Quote.propTypes = {
  characterName: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired
};

export default Quote;
