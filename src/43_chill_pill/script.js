const quoteList = [
  "Some doors only open from the inside. Breath is a way of accessing that door.",
  "What has to be taught first, is the breath.",
  "Remember the blue sky. It may at times be obscured by clouds, but it is always there.",
  "In the midst of movement and chaos, keep stillness inside of you.",
  "We can't control the sea, but we can learn how to surf the waves.",
  "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.",
  "To understand the immeasurable, the mind must be extraordinarily quiet, still.",
];

const colors = [
  "#e81416",
  "#ffa500",
  "#79c314",
  "#487de7",
  "#4b369d",
  "#70369d",
];

const htmlBody = document.querySelector("body");
const wrapperDiv = document.getElementById("wrapper");
let quoteText = document.getElementById("quote-text");
const quoteButton = document.getElementById("quote-button");

// Define a variable to store the previous index
let previousIndex;

quoteButton.addEventListener("click", function () {
  let randomIndex;

  // Generate a new random index until it's different from the previous one
  do {
    randomIndex = Math.floor(Math.random() * quoteList.length);
  } while (randomIndex === previousIndex);

  // Update the previousIndex to the current randomIndex
  previousIndex = randomIndex;

  // Use the randomIndex to get a random quote from the quoteList array
  quoteText.innerHTML = quoteList[randomIndex];

  // Change the text color of the quoteText variable
  quoteText.style.color = colors[randomIndex];

  // Change the background color of the wrapperDiv
  htmlBody.style.backgroundColor = colors[randomIndex];

  // Change the background color of the quoteButton
  quoteButton.style.backgroundColor = colors[randomIndex];
});

