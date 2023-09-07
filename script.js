const quotes = [{quote: " Surviving is winning Franklin, everything else is bullshit, fairytails spawned by people afraid to look life in the eye", author: "Michael Townley"},
{quote: " Without fear life is meaningless", author: "Scarecrow"},
{quote: ' -You have no honour\n-And you are a slave to it', author: "Uncle Shimura and Jin Sakai"},
{quote: " I am not the villain in this story, i do what i do because there is no choice", author: "Samuel Hayden"},
{quote: " Do not be sorry, be better", author: "Kratos"},
{quote: " Some of us have to cross the line, to make sure the line is still there in the morning", author: "Colonel John Konrad"},
{quote: " History is written by the victor, history is filled with liars", author: "Captain Price"},
{quote: " We work in the dark to serve the light\nWe are Assasins", author: "Ezio Auditore"},
{quote: " We don't get to choose how we start this life, real greatness is what you do with the hand you are dealt", author: "Victor Sullivan"},
{quote: " It's a me, Mario", author: "Mario"},
{quote: " It's dangerous to go alone! Take this", author: "Old Man"},
{quote: " I used to be an adventurer like you. Then I took an arrow in the knee", author: "Guard"},
{quote: " Nothing is true, everything is permitted", author: "Ezio Auditore"},
{quote: " It's time to kick ass and chew bubble gum… and I'm all out of gum", author: "Duke Nukem"},
{quote: " We all make choices in life, but in the end our choices make us", author: "Andrew Ryan"},
{quote: " Thank you Mario! But our princess is in another castle", author: "Toad"},
{quote: " I don't need a weapon. My friends are my power!", author: "Sora"},
{quote: " Get Over Here", author: "Scorpion"},
{quote: " The right man in the wrong place can make all the difference in the world", author: "G-Man"},
{quote: " A man chooses, a slave obeys", author: "Andrew Ryan"},
{quote: " All your base are belong to us", author: "CATS"},
{quote: " Snake? Snake! Snaaaaake!", author: "Otacon"},
{quote: " War. War never changes", author: "Fallout Narrator"},
{quote: " You forget an thousand things everyday pal. Make sure this is one of them", author: "Michael Da Santa"},
{quote: " The definition of insanity is doing the same thing over and over again and expecting different results", author: "Vaas"},
{quote: " A hero needs not speak. When he is gone, the world will speak for him", author: "Master Chief"},
{quote: " Kept you waiting huh?", author: "Solid Snake"},
{quote: " What is better? To be born good or to overcome your evil nature through great effort?", author: "Paarthurnax"},
{quote: " I've covered wars, you know", author: "Frank West"},
{quote: " I am sworn to carry your burdens", author: "Lydia"},
{quote: " There's always a lighthouse. There's always a man. There's always a city.", author: "Elizabeth"}
  ];

const container = document.querySelector('.container');
const box = document.querySelector('.box');
const changeColorBtn = document.getElementById('changeColorBtn');
const quote = document.querySelector('.quote');
const quoteText = quote.lastChild;
const author = document.querySelector('.author');
const socialButtons = document.querySelectorAll('.button');

console.log(quote.childNodes);

changeColorBtn.addEventListener('click', () => {
  const newColor = getRandomColor();
  const newQuote = getRandomQuote();
  container.style.backgroundColor = newColor;
  box.style.backgroundColor = lightenColor(newColor, 0.7); // Adjust the factor to control how close to white the tint gets
  socialButtons.forEach((socialButton) => (socialButton.style.backgroundColor = newColor));
  quote.style.color = newColor;
  author.style.color = newColor;
  changeColorBtn.style.backgroundColor = newColor;
  quoteText.nodeValue = newQuote.quote;
  author.innerHTML = `- ${newQuote.author}`;
});

function getRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function lightenColor(color, factor) {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  const newR = Math.min(255, Math.floor(r + (255 - r) * factor));
  const newG = Math.min(255, Math.floor(g + (255 - g) * factor));
  const newB = Math.min(255, Math.floor(b + (255 - b) * factor));

  return `rgb(${newR},${newG},${newB})`;
}

const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random()*quotes.length);
  return quotes[randomNumber];
}

