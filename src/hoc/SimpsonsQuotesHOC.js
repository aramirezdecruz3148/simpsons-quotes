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
      if(loading) return <div style={{ display: 'flex', justifyContent: 'center' }}><iframe src="https://giphy.com/embed/ISjYZh2up6Pn2" width="480" height="480" frameBorder="0"  allowFullScreen></iframe></div>;

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
