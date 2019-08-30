const initialState = {
  quotes: [{ quote: '', characterName: '', characterImage: '' }],
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}
