"use-strict";

const quote = [
  {
    quote:
      "Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road.",
    author: "Stewart Brand",
  },
  {
    quote:
      "The new science will be a manifestation of ancient technologies. It will come in sudden, humans will experience technological shock",
    author: "Toba Beta",
  },
  {
    quote:
      "I fear the day that technology will surpass our human interaction. The world will have a generation of idiots",
    author: "Albert Einstein",
  },
  {
    quote: "You affect the world by what you browse.",
    author: "Tim Berners-Lee",
  },
  {
    quote: "Computers are like Old Testament gods; lots of rules and no mercy.",
    author: "Joseph Campbell",
  },
  {
    quote:
      "During the period of the Saturn-Apollo missions we were pilgrims in space, ranging from home in search of knowledge. Now we will become shepherds tending our technological flocks, but like the shepherds of old, we will keep our eyes fixed on the heavens",
    author: "Jimmy Carter",
  },
  {
    quote:
      "So much information lacks a good way to store it, especially when it’s all digital; sometimes it requires old technology to go back and retrieve it.",
    author: "Douglas Coupland",
  },
  {
    quote:
      "So much information lacks a good way to store it, especially when it’s all digital; sometimes it requires old technology to go back and retrieve it.",
    author: "Niklas Zennstrom",
  },
  {
    quote:
      "Technology has become a way of mediating human interaction, coming in between old-fashioned phone calls and face-to-face chitchat. Not sure where it’ll end up",
    author: "Khalil Gibran Muhammad",
  },
  {
    quote:
      "Many people mistakenly think a new technology cancels out an old one.",
    author: "Judith Martin",
  },
  {
    quote:
      "We are in an electronic technology age now and it’s about time we put away the old stuff.",
    author: "Monica Edwards",
  },
  {
    quote:
      "I’m not familiar enough with it, and I’m too old school a brain to be able to figure it out. I’m dumb. Anything that I have to attack with my thumbs, for any period of time, makes me feel stupid. So, I try to avoid it, as much as possible, to protect my thumbs.",
    author: "Johnny Depp",
  },
  {
    quote:
      "Email is a 40-year-old technology that is not going away for very good reasons – it’s the cockroach of the Internet",
    author: "Jason Hirschhorn",
  },
  {
    quote:
      "It isn’t just skills like computer technology. It’s the old-fashioned basics of self-reliance, self-motivation, self-reinforcement, self-discipline, self-command.",
    author: "Dan Barber",
  },
  {
    quote:
      "We’re achieving better marbling and better flavor with old world wisdom that’s been passed down for generations but we’re still using technology.",
    author: "Marshall McLuhan",
  },
  {
    quote:
      "As technology advances, it reverses the characteristics of every situation again and again. The age of automation is going to be the age of ‘do it yourself.",
    author: "Richard P. Feynman",
  },
  {
    quote:
      "For a successful technology, reality must take precedence over public relations, for Nature cannot be fooled.",
    author: "Peter Drucker",
  },
  {
    quote: "If you want something new, you have to stop doing something old.",
    author: "Stewart Brand",
  },
  {
    quote:
      "The sun as the expression of old world energy is torn down from the heavens by modern man, who by virtue of his technological superiority creates his own energy source.",
    author: "El Lissitzky",
  },
  {
    quote:
      "Technology… the knack of so arranging the world that we don’t have to experience it",
    author: "Max Frisch",
  },
];
const quoteToDisplay = document.querySelector("blockquote");
const authorToDisplay = document.querySelector("span");
const reload = document.querySelector(".reloader");

const onLoad = function () {
  const rn = Math.floor(Math.random() * 20);

  quoteToDisplay.textContent = quote[rn].quote;
  authorToDisplay.textContent = quote[rn].author;
};
onLoad();

reload.addEventListener("click", onLoad);
