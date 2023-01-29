const quotes = [
  {
    quote:
      "Don’t settle for what life gives you; make life better and build something.",
    author: "Ashton Kutcher",
  },
  {
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
  },
  {
    quote: "He can do. She can do. Why not me?",
    author:
      "One of Enterpreneur of Korea Kim Taeyeon",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas Alva Edison",
  },
  {
    quote:
      "I fint the harder work, the more luch I have",
    author: "Thomas Jefferson",
  },
  {
    quote:
      "Success doesn't come to anyone, but it comes to the self-controlled and the hard-working.",
    author: "",
  },
  {
    quote:
      "Life is interesting. In the end, some of your greatest pains, become your greatest strengths",
    author: "Drew Barrymore",
  },
  {
    quote:
      "A gem cannot be polished without friction, nor a man  perfected without trials",
    author: "Chinese Proverb",
  },
  {
    quote:
      'Whenever I heard "It cannot be done." I know I am close to success. ',
    author: "Michael Flatley",
  },
  {
    quote:
      "I can accept failure, everyone fails at something. But I can't accept not trying.",
    author: "Michael Jordan",
  },
];

const quoteOfDay =
  quotes[
    Math.floor(Math.random() * quotes.length)
  ];
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
quote.innerText = quoteOfDay.quote;
author.innerText = quoteOfDay.author;
