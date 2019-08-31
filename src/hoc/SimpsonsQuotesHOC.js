import React from 'react';
import PropTypes from 'prop-types';
import Load from '../components/quotes/Load';

export const withQuotes = (Component, Loader = Load) => {
  class withQuotes extends React.Component {
    static propTypes = {
      fetch: PropTypes.func.isRequired,
      quotes: PropTypes.array.isRequired,
      loading: PropTypes.bool.isRequired
    };

    componentDidMount() {
      this.props.fetch();
    }

    render() {
      const { loading } = this.props;
      if(loading) return <h1>LOADING</h1>;

      return (
        <>
          <Loader handleOnClick={this.props.fetch} />
          <Component {...this.props} />
        </>
      );
    }
  }
  return withQuotes;
};
