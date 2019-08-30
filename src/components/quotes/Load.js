import React from 'react';
import PropTypes from 'prop-types';

function Load({ handleOnClick }) {
  return (
    <button onClick={handleOnClick}></button>
  );
}

Load.propTypes = {
  handleOnClick: PropTypes.func.isRequired
};

export default Load;
