import React, { useState } from "react";
import twitter_logo from "../Assets/twitter.png";
import reload_logo from "../Assets/reload.png";
import "./RandomQuote.css";

function RandomQuote() {
  // Local array of quotes
  const localQuotes = [
    {
      text: "Difficulties increase the nearer we get to the goal",
      author: "Johann Wolfgang von Goethe",
    },
    {
      text: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    {
      text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
      author: "Brian Tracy",
    },
  ];

  const random = () => {
    const select = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    setQuote(select);
  };

  const [quote, setQuote] = useState(localQuotes[0]);

  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text}-${quote.author}`
    );
  };

  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="buttom">
          <div className="author">-{quote.author}</div>
          <div className="icons">
            <img src={reload_logo} onClick={random} alt="" />
            <img
              src={twitter_logo}
              onClick={() => {
                twitter();
              }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomQuote;
