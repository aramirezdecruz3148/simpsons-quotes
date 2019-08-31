import React from 'react';
import PropTypes from 'prop-types';
import styles from './Load.css';
import donut from '../../assets/donut.png';

function Load({ handleOnClick }) {
  return (
    <div className={styles.center}>
      <div className={styles.container}>
        <h3 onClick={handleOnClick}>Load More Characters</h3>
        <img onClick={handleOnClick} src={donut} />
      </div>
    </div>
  );
}

Load.propTypes = {
  handleOnClick: PropTypes.func.isRequired
};

export default Load;
