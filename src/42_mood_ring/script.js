let primaryEmotions = [
  {
    emotion: "anger",
    relatives: ["mad", "upset", "pissed off", "pissed", "furious", "irritated", "enraged", "outraged", "infuriated", "livid", "steaming", "fuming", "burning", "seething", "aggravated"]
  },
  {
    emotion: "hapiness",
    relatives: ["happy", "joy", "cheerful", "delighted", "overjoyed", "ecstatic", "thrilled", "elated", "content", "grateful", "pleased", "jubilant", "exultant", "merry", "gleeful"]
  },
  {
    emotion: "sadness",
    relatives: ["sad", "depressed", "blue", "down", "heartbroken", "miserable", "gloomy", "sorrowful", "despondent", "disheartened", "forlorn", "despairing", "woeful", "melancholic", "grieving"]
  },
  {
    emotion: "disgust",
    relatives: ["disgusted", "repulsed", "gross", "sicked", "appalled", "nauseated", "horrified", "disdainful", "abhorrent", "offended", "repelled", "revolted", "loathing", "detested", "contempt", "grossed out"]
  },
  {
    emotion: "fear",
    relatives: ["afraid", "terrified", "scared", "panicked", "anxious", "nervous", "tense", "uneasy", "worried", "petrified", "frightened", "alarmed", "horrified", "terrified", "distressed"]
  },
  {
    emotion: "excitement",
    relatives: ["excited", "eager", "enthusiastic", "thrilled", "amped", "hyped", "stoked", "aroused", "ebullient", "animated", "energized", "exhilarated", "electrified", "inflamed", "enthused"]
  },
]

// Assign a variable to each DOM element
const submitBtn = document.getElementById("submitBtn");
const heading = document.getElementById("heading");
const moodRingBorder = document.getElementById("moodRing");
const flowerPedal = document.getElementById("pedal");

// Toggle spin class (animation)
function spinIt() {
  moodRingBorder.classList.toggle("spin");

  moodRingBorder.addEventListener('animationend', () => {
    moodRingBorder.classList.remove("spin");
  });
}

spinIt();

// Create a variable that selects the element with the id of "stone"
let stone = document.querySelector("body");

submitBtn.addEventListener("click", function () {
  const userInputValue = document.getElementById("userInput").value;

  // Outer loop: going through each primary emotion in the primaryEmotions array.
  for (let i = 0; i < primaryEmotions.length; i++) {

    // Inner loop: accesses the 'relatives' array of each primary emotion.
    for (let j = 0; j < primaryEmotions[i].relatives.length; j++) {

      // Check if any 'relative' emotions are included in the user input.
      if (userInputValue.includes(primaryEmotions[i].relatives[j])) {

        // If a match is found, it sends an alert to the user indicating the primary emotion
        heading.textContent = `It seems you might be experiencing ${primaryEmotions[i].emotion}.`;

        // Update the background color and flower pedal image based on the primary emotion
        if (primaryEmotions[i].emotion === "anger") {
          stone.style.backgroundColor = "#240505";
          spinIt();
          flowerPedal.src = "https://raw.githubusercontent.com/beingsie/trifecta-codedex/e575ae0d299bb719c43b0fdd4b855003a60aa8d5/src/42_mood_ring/angry-face.svg";
        } else if (primaryEmotions[i].emotion === "disgust") {
          stone.style.backgroundColor = "#05240D";
          spinIt();
          flowerPedal.src = "https://raw.githubusercontent.com/beingsie/trifecta-codedex/e575ae0d299bb719c43b0fdd4b855003a60aa8d5/src/42_mood_ring/disgust-face.svg";
        } else if (primaryEmotions[i].emotion === "hapiness") {
          stone.style.backgroundColor = "#291D06";
          spinIt();
          flowerPedal.src = "https://raw.githubusercontent.com/beingsie/trifecta-codedex/aa3d7fc847c5124a45069d628cc6e576a3b7d4ab/src/42_mood_ring/excitement-face.svg";
        } else if (primaryEmotions[i].emotion === "fear") {
          stone.style.backgroundColor = "#1E0524";
          spinIt();
          flowerPedal.src = "https://raw.githubusercontent.com/beingsie/trifecta-codedex/e575ae0d299bb719c43b0fdd4b855003a60aa8d5/src/42_mood_ring/fear-face.svg";
        } else if (primaryEmotions[i].emotion === "sadness") {
          stone.style.backgroundColor = "#051824";
          spinIt();
          flowerPedal.src = "https://raw.githubusercontent.com/beingsie/trifecta-codedex/e575ae0d299bb719c43b0fdd4b855003a60aa8d5/src/42_mood_ring/sad-face.svg";
        } else if (primaryEmotions[i].emotion === "excitement") {
          stone.style.backgroundColor = "#3D1C0B";
          spinIt();
          flowerPedal.src = "https://raw.githubusercontent.com/beingsie/trifecta-codedex/e575ae0d299bb719c43b0fdd4b855003a60aa8d5/src/42_mood_ring/happy-face.svg";
        }
      }
    }
  }
});
