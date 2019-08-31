export const getQuotes = (count = 10) => {
  return fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}`)
    .then(res => {
      if(!res.ok) throw 'Unable to retrieve quote';

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
