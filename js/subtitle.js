let specificGreetingSelected = false;

function getRandomGreeting() {
    var greetings = [
        "did you know I was featured on the talk tuah podcast?",
        "Cedric is a gyatt",
        "yo Pierre, you wanna come out here?",
        "yuh - Drake",
        "wouldn't it be funny?",
        "do you smell it?",
        "no, this is Patrick!",
        "𝒇𝒓𝒆𝒂𝒌𝒚",
        "microwaving Delson",
        "heavy! throw it back!",
        "Dwight's fire drill was not effective.",
        "I'm in Spain without the A",
        "youtube.com/watch?v=dQw4w9WgXcQ",
        "your UPS package is delayed.",
        "silly little guy ↓",
        "may I please have a water?",
        "umm what do I press to shoot? - Peter Griffin",
        "Why do they call it oven if you food oven the cold food of out hot eat the oven?",
        "this ain't cheddar, this quiche",
        'We do not speak of <span class="red-text">THE CLOCK INCIDENT</span>', // Added greeting
    ];

    var randomIndex = Math.floor(Math.random() * greetings.length);
    var selectedGreeting = greetings[randomIndex];

    // Check for a specific greeting
    if (selectedGreeting === "silly little guy ↓") {
        specificGreetingSelected = true;
    }

    return selectedGreeting;
}

document.getElementById("subtitle").innerHTML = getRandomGreeting(); // Use innerHTML to allow HTML content

// Show a random image if specificGreetingSelected is true
if (specificGreetingSelected) {
    const imageElement = document.getElementById("specialImage");

    // Generate a random number (0 or 1) for 50% chance
    const randomImageChoice = Math.random() < 0.5 ? 0 : 1;

    // Set the image source based on the random choice
    if (randomImageChoice === 0) {
        imageElement.src = "/sillyguy.png"; // Update this with your first image path
    } else {
        imageElement.src = "/maxwell.png"; // Update this with your second image path
    }

    imageElement.style.display = "block"; // Show the image
}
