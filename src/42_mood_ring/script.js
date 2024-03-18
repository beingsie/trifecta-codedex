// Select mood button
const moodBtn = document.getElementById("moodBtn");// Extra 😎

// User input
const userInput = document.getElementById("userInput");

let emotionsAnger = ["mad", "upset", "pissed off", "pissed", "furious", "irritated", "enraged", "outraged", "infuriated", "livid", "steaming",];
let emotionsHappiness = ["happy", "joy", "cheerful", "delighted", "overjoyed", "ecstatic", "thrilled", "elated", "content", "grateful",];
let emotionsSadness = ["sad", "depressed", "blue", "down", "heartbroken", "miserable", "gloomy", "sorrowful", "despondent", "disheartened",];
let emotionsDisgust = ["disgusted", "repulsed", "sicked", "appalled", "nauseated", "horrified", "disdainful", "abhorrent", "offended", "repelled",];
let emotionsFear = ["afraid", "terrified", "scared", "panicked", "anxious", "nervous", "tense", "uneasy", "worried", "petrified",];
let emotionsExcitement = ["excited", "eager", "enthusiastic", "thrilled", "amped", "hyped", "stoked", "aroused", "ebullient", "animated",];

// Function onClick
function changeMood() {// Extra 😎
  const userInputValue = userInput.value.toLowerCase();

  // Select mood ring border
  let moodRingBorder = document.getElementById("moodRing");// Extra 😎
  // Select flower pedal
  const flowerPedal = document.getElementById("pedal");
  // Toggle spin class (animation)
  moodRingBorder.classList.add("spin");// Extra 😎

  moodRingBorder.addEventListener('animationend', () => {// Extra 😎
    moodRingBorder.classList.remove("spin");
  });

  // Create a variable that selects the element with the id of "stone"
  let stone = document.querySelector("body");

  // Change the .style.backgroundColor property
  // according to the value of userInputValue
  if (userInputValue === "angry") {
    stone.style.backgroundColor = "#240505";
    flowerPedal.src = "https://raw.githubusercontent.com/beingsie/trifecta-codedex/e575ae0d299bb719c43b0fdd4b855003a60aa8d5/src/42_mood_ring/angry-face.svg";
  } else if (userInputValue === "disgust") {
    stone.style.backgroundColor = "#05240D";
    flowerPedal.src = "https://raw.githubusercontent.com/beingsie/trifecta-codedex/e575ae0d299bb719c43b0fdd4b855003a60aa8d5/src/42_mood_ring/disgust-face.svg";
  } else if (userInputValue === "happy") {
    stone.style.backgroundColor = "#291D06";
    flowerPedal.src = "https://raw.githubusercontent.com/beingsie/trifecta-codedex/e575ae0d299bb719c43b0fdd4b855003a60aa8d5/src/42_mood_ring/happy-face.svg";
  } else if (userInputValue === "fear") {
    stone.style.backgroundColor = "#1E0524";
    flowerPedal.src = "https://raw.githubusercontent.com/beingsie/trifecta-codedex/e575ae0d299bb719c43b0fdd4b855003a60aa8d5/src/42_mood_ring/fear-face.svg";
  } else if (userInputValue === "sad") {
    stone.style.backgroundColor = "#051824";
    flowerPedal.src = "https://raw.githubusercontent.com/beingsie/trifecta-codedex/e575ae0d299bb719c43b0fdd4b855003a60aa8d5/src/42_mood_ring/sad-face.svg";
  } else {
    alert("Enter one of the 5 emotions.")
  }
}
