const quotes = [
  "Believe in yourself.",
  "Stay curious.",
  "Every day is a new beginning.",
  "Don't stop until you're proud.",
  "Make today count."
];

function generateQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[random];
}
