export const getQuotes = (count = 5) => {
  return fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}`)
    .then(res => {
      if(!res.okay) throw 'Unable to retrieve quote';

      return res.json();
    })
    .then(quotes => {
      return quotes.map(quote => ({
        quote: quote.quote,
        characterImage: quote.image,
        characterName: quote.character
      }));
    });
};
