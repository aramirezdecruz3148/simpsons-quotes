import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Quotes from '../components/quotes/Quotes';
import { getQuotes, getQuotesLoading } from '../selectors/simpsonsSelectors';
import { fetchQuotes } from '../actions/simpsonsActions';

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

const mapStateToProps = state => ({
  quotes: getQuotes(state),
  loading: getQuotesLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuotes());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpsonsQuotes);
