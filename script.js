const things = [
  "Food",
  "Considerate people",
  "Clean",
  "Safe",
  "Convenient",
  "Interesting",
  "Natto",
  "You can eat raw eggs",
  "Trains",
  "Japanese language",
  "Anime"
]

const thing = things[Math.floor(Math.random() * things.length)];

document.getElementById("thing").textContent = thing;
