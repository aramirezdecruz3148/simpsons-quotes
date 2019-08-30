import { getQuotes } from '../services/simpsonsApi';

export const FETCH_QUOTES = 'FETCH_QUOTES';
export const FETCH_QUOTES_LOADING = 'FETCH_RATES_LOADING';
export const fetchQuotes = () => ({
  type: FETCH_QUOTES,
  payload: getQuotes(),
  pendingType: FETCH_QUOTES_LOADING
});
