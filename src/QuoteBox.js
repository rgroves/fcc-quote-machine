import { useState, useEffect } from "react";
import getQuote from "./getQuote";

export default function QuoteBox() {
  const [quoteDetails, setQuoteDetails] = useState({ text: "", author: "" });

  useEffect(() => {
    const randomQuote = getQuote();
    setQuoteDetails(randomQuote);
    console.log("quoteDetails", quoteDetails);
  }, []);

  const handleNewQuoteClick = () => {
    const randomQuote = getQuote();
    setQuoteDetails(randomQuote);
  };

  const fullQuoteText = `${quoteDetails.text} — ${quoteDetails.author}`;
  const encodedQuote = encodeURIComponent(fullQuoteText);
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodedQuote}`;

  return (
    <div id="quote-box">
      <div id="text">{quoteDetails.text}</div>
      <div id="author">— {quoteDetails.author}</div>
      <button id="new-quote" onClick={handleNewQuoteClick}>
        New Quote
      </button>
      <a id="tweet-quote" href={tweetUrl}>
        Tweet Quote
      </a>
    </div>
  );
}
