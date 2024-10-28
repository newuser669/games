let specificGreetingSelected = false;
let isMovingLeft = true; // Initial direction
let titleDriftInterval; // To store the interval for drifting title and subtitle

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
        "hawk 2: ah!",
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
        'We do not speak of <span class="red-text">THE CLOCK INCIDENT</span>',
        "virtually insane!", // Added specific greeting
    ];

    var randomIndex = Math.floor(Math.random() * greetings.length);
    var selectedGreeting = greetings[randomIndex];

    // Check for specific greetings
    if (selectedGreeting === "silly little guy ↓") {
        specificGreetingSelected = true;
    } else if (selectedGreeting === "virtually insane!") {
        startTitleDrift(); // Start drifting if the greeting is "virtually insane!"
    }

    return selectedGreeting;
}

function startTitleDrift() {
    const title = document.querySelector('h1');
    const subtitle = document.getElementById('subtitle');
    let position = 0; // Initial position

    // Clear any existing intervals
    clearInterval(titleDriftInterval);

    titleDriftInterval = setInterval(() => {
        position += isMovingLeft ? -1 : 1; // Move left or right

        // Update position
        title.style.transform = `translateX(${position}px)`;
        subtitle.style.transform = `translateX(${position}px)`;

        // Change direction when reaching edges
        if (position <= -200 || position >= 200) { // Adjust these values as needed
            isMovingLeft = !isMovingLeft;
        }
    }, 10); // Adjust the speed of drifting
}

document.getElementById("subtitle").innerHTML = getRandomGreeting(); // Use innerHTML to allow HTML content

// Show a random image if specificGreetingSelected is true
if (specificGreetingSelected) {
    const imageElement = document.getElementById("specialImage");

    // Generate a random number between 0 and 100 for the probability distribution
    const randomChoice = Math.random() * 100;

    // Determine which image to show based on the random number
    if (randomChoice < 33) {
        imageElement.src = "/sillyguy.png"; // Update this with your first image path (50% chance)
    } else if (randomChoice < 67) {
        imageElement.src = "/maxwell.png"; // Update this with your second image path (49% chance)
    } else {
        imageElement.src = "/petah.jpg"; // Update this with your third image path (1% chance)
    }

    imageElement.style.display = "block"; // Show the image
}
