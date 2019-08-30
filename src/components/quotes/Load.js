import React from 'react';
import PropTypes from 'prop-types';

function Load({ handleOnClick }) {
  return (
    <button onClick={handleOnClick}>Load More Quotes</button>
  );
}

Load.propTypes = {
  handleOnClick: PropTypes.func.isRequired
};

export default Load;
