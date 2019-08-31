import { connect } from 'react-redux';
import Quotes from '../components/quotes/Quotes';
import { getCharacterQuotes, getQuotesLoading } from '../selectors/simpsonsSelectors';
import { fetchQuotes } from '../actions/simpsonsActions';
import { withQuotes } from '../hoc/SimpsonsQuotesHOC';

const mapStateToProps = state => ({
  quotes: getCharacterQuotes(state),
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
)(withQuotes(Quotes));
