import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Quotes from '../components/quotes/Quotes';

class SimpsonsQuotes extends Component {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    quotes: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { quotes, loading } = this.props;
    if(loading) return <h1>LOADING</h1>;

    return <Quotes quotes={quotes} />;
  }
}

// const mapStateToProps = state => ({

// });

// const mapDispatchToProps = dispatch => ({

// });
