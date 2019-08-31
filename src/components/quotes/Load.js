import React from 'react';
import PropTypes from 'prop-types';
import './Load.css';

function Load({ handleOnClick }) {
  return (
    <button onClick={handleOnClick}>Load More Quotes</button>
  );
}

Load.propTypes = {
  handleOnClick: PropTypes.func.isRequired
};

export default Load;
