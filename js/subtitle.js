let specificGreetingSelected = false;

function getRandomGreeting() {
  var greetings = [
    "Did you know I was featured on the talk tuah podcast?",
    "Cedric is a gyatt",
    "Powered by baby oil!",
    "Shoutout to Drake!",
    "are you a gooner?",
    "wouldn't it be funny?",
    "do you smell it?",
    "𝒇𝒓𝒆𝒂𝒌𝒚",
    "microwaving Delson",
    "heavy! throw it back!",
    "Dwight's fire drill was not effective.",
    "I'm in Spain without the A",
    "youtube.com/watch?v=dQw4w9WgXcQ",
    "silly little guy ↓",
    "May I please have a water?",
    "umm what do I press to shoot? - Peter Griffin",
    "Why do they call it oven if you food oven the cold food of out hot eat the oven?",
  ];
  
  var randomIndex = Math.floor(Math.random() * greetings.length);
  var selectedGreeting = greetings[randomIndex];
  
  // Check for a specific greeting
  if (selectedGreeting === "silly little guy ↓") {
    sillylittleguy = true;
  }

  return selectedGreeting;
}

document.getElementById("subtitle").innerText = getRandomGreeting();

// Show the image if specificGreetingSelected is true
if (sillylittleguy) {
  const imageElement = document.getElementById("specialImage");
  imageElement.src = "https://i.pinimg.com/736x/da/55/b7/da55b7cd90942123eef642f922a12a1e.jpg"; // Update this with your image path
  imageElement.style.display = "block"; // Show the image
}
