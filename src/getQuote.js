let previousIdx = -1;

function getQuote() {
  const quotes = [
    {
      text:
        "I think computer viruses should count as life ... I think it says something about human nature that the only form of life we have created so far is purely destructive. We've created life in our own image.",
      author: "Stephen Hawking",
    },
    {
      text:
        "The people who are crazy enough to think they can change the world are the ones who do.",
      author: "Rob Siltanen",
    },
    {
      text:
        "I know there's a proverb which that says 'To err is human,' but a human error is nothing to what a computer can do if it tries.",
      author: "Agatha Christie",
    },
    { text: "Any idiot can put up a website.", author: "Patricia Briggs" },
    {
      text:
        "Computers are like Old Testament gods; lots of rules and no mercy.",
      author: "Joseph Campbell",
    },
  ];

  let randomIdx;

  do {
    randomIdx = Math.floor(Math.random() * quotes.length);
    console.log("looping for a new idx, new idx is:" + randomIdx);
  } while (randomIdx === previousIdx);

  previousIdx = randomIdx;

  console.log({ randomIdx });
  const chosenQuote = quotes[randomIdx];

  return chosenQuote;
}

export default getQuote;
