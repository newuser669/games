  function getRandomGreeting() {
  var greetings = [
    "Did you know I was featured on the talk tuah podcast?",
    "Cedric is a gyatt",
    "Powered by baby oil!",
    "Shoutout to Drake!",
    "are you a gooner?",
    "𝒇𝒓𝒆𝒂𝒌𝒚",
    "microwaving Delson",
    "heavy! throw it back!",
    "Dwight's fire drill was not effective.",
    "I'm in Spain without the A",
    "youtube.com/watch?v=dQw4w9WgXcQ",
    "May I please have a water?",
    "umm what do I press to shoot? - Peter Griffin",
    "Why do they call it oven if you food oven the cold food of out hot eat the oven?",
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
