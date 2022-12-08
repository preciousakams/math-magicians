import React from 'react';
import Quote from './RandomQuote';

const Quotes = () => {
  const index = Math.floor(Math.random() * Quote.length);
  const { quote } = Quote[index];
  const { author } = Quote[index];

  return (
    <div className="quoteDiv">
      <h2>{quote}</h2>
      <p>{author}</p>
    </div>
  );
};
export default Quotes;
