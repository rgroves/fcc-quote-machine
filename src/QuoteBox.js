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

  return (
    <div id="quote-box">
      <div id="text">{quoteDetails.text}</div>
      <div id="author">— {quoteDetails.author}</div>
      <button id="new-quote" onClick={handleNewQuoteClick}>
        New Quote
      </button>
      <a id="tweet-quote" heref="#">
        Tweet Quote
      </a>
    </div>
  );
}
