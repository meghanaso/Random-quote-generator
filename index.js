var quotes = [
    {
      quote:
        "I loved her, not for the way she danced with my angels but for the way the sound of her name could silence my demons.",
      author: "Christopher Pointdexter"
    },
    {
      quote:
        "For a long time, I thought I wanted to be a nun. Then I realized that what I really wanted to be was a lesbian.",
      author: "Emily Brontë"
    },
    {
      quote: "Whatever our souls are made of, his and mine are the same.",
      author: "Mabel Maney"
    },
    {
      quote:
        "I don’t want to repeat my innocence. I want the pleasure of losing it again.",
      author: "F. Scott Fitzgerald"
    },
    {
      quote:
        "Those who have never known the deep intimacy and the intense companionship of mutual love have missed the best thing that life has to give.",
      author: "Bertrand Russell"
    }
  ];
  
  function generateRandomQuote() {
    let random = generateRandomNumber(quotes.length);
    document.getElementById("text").innerHTML = quotes[random].quote;
    document.getElementById("author").innerHTML = quotes[random].author;
  }
  window.onload = function () {
    generateRandomQuote();
    document.body.style.backgroundColor = generateRandomColor();
    document
      .getElementById("new-quote")
      .addEventListener("click", generateRandomQuote);
  };
  
  function generateRandomNumber(maxLimit) {
    return Math.floor(Math.random() * maxLimit);
  }
  
  const newQuoteButton = document.getElementById("new-quote");
  
  newQuoteButton.addEventListener("click", () => {
    document.body.style.backgroundColor = generateRandomColor();
  });
  
  function generateRandomColor() {
    let r = generateRandomNumber(256);
    let g = generateRandomNumber(256);
    let b = generateRandomNumber(256);
    return `rgb(${r},${g},${b})`;
  }
  