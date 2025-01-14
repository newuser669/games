let specificGreetingSelected = false;
let isMovingLeft = true; // Initial direction
let titleDriftInterval; // To store the interval for drifting title and subtitle

function getRandomGreeting() {
    var greetings = [
        "did you know I was featured on the talk tuah podcast?",
        "Cedric is a gyatt",
        "if you're reading this, it's too late",
        "if you're reading this, it's too early",
        "if you're reading this, it's just right",
        "if you're reading this, you're reading this right",
        "if you're reading this, you're reading this left",
        "if you're reading this, you're too close",
        "if you're reading this, you're too slow",
        "if you're reading this, you're too cold",
        "if you're reading this, you're too old",
        "if you're reading this, you're too bold",
        "if you ever have a problem with the website, try clearing your cache",
        "wash your hands",
        "pov: inside of a microwave",
        "'2024 music' ❌ '20204 music' ✅ only a few more years to go!",
        "mr beast burger exposed - the truth revealed (not clickbait) [GONE WRONG]",
        "kanye west - nitrus town aldis",
        "I'm in Spain without the pain",
        "i would like a number 9, a number 9 large, a number 6 with extra dip, a number 7, two number 45s, one with cheese, and a large soda",
        " ͡° ͜ʖ ͡°",
        "i i i i i i",
        "why does my dog walk sideways?",
        "why does my delson walk upside down?",
        "yo Pierre, you wanna come out here?",
        "what's poppin'? - Jack Harlow (feat. DaBaby, Tory Lanez, & Lil Wayne) [Official Music Video] [Remix] [Lyrics] [HD] [HQ] [Explicit] [Bass Boosted] [100 Hours] [no ads] [with download link] [free] [2021] [working] [not clickbait]",
        "yuh - Drake",
        "wouldn't it be funny?",
        "do you smell it?",
        "no, this is Patrick!",
        "𝒇𝒓𝒆𝒂𝒌𝒚",
        "stop posting about San Andreas, I'm tired of seeing it!",
        "I 'accidentally hit the orphanage' with my 'car' and now I'm 'going to jail' whatever that means...",
        "hawk 2: ah!",
        "merry crispyness! marry chris! happy new... chris!",
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
        "virtually insane!",
        "please don't touch the screen, it hurts",
        "please do not eat your dad's pet fish's food, it is not for you, you are not a fish.",
        "please do not eat your pet washing machine, it could damage your washing machine.",
        "remember to eat your (vege)tables",
        "we good from state to state, you go to the state, you WILL BE FINE 👍",
        "you're hairy, wizard!",
        "D: = de-colon = decolonize?",
        "what's the difference between a piano, a tuna, and a pot of glue? you can tune a piano, but you can't piano.",
        "the quick brown fox jumps over the lazy dog",
        "eat my shorts",
        "Why won't you adopt me? Because you're <span class='red-text'>adopted</span>.",
        "I'm in the ocean",
        "GET OUT!",
    ];

    var randomIndex = Math.floor(Math.random() * greetings.length);
    var selectedGreeting = greetings[randomIndex];

    // Check for specific greetings
    if (selectedGreeting === "silly little guy ↓") {
        specificGreetingSelected = true;
    } else if (selectedGreeting === "virtually insane!") {
        startTitleDrift();
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
        const cursorGlow = document.getElementById('cursorGlow');

        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = `${e.clientX}px`; // Update horizontal position
            cursorGlow.style.top = `${e.clientY}px`; // Update vertical position
        });

        function createSnowflakes() {
            const snowContainer = document.getElementById('snow-container');
            const snowflakeCount = 100; // Adjust the number of snowflakes

            for (let i = 0; i < snowflakeCount; i++) {
                const snowflake = document.createElement('div');
                snowflake.className = 'snowflake';
                
                // Randomize position and animation duration
                const left = Math.random() * 100; // Random left position
                const animationDuration = Math.random() * 3 + 2; // Random duration between 2 and 5 seconds
                
                snowflake.style.left = `${left}vw`;
                snowflake.style.animationDuration = `${animationDuration}s`;
                snowflake.style.animationDelay = `${Math.random() * 5}s`; // Random delay to stagger the snowfall

                snowContainer.appendChild(snowflake);
            }
        }

        // Start creating snowflakes when the page loads
        window.onload = createSnowflakes;
// Show a random image if specificGreetingSelected is true
if (specificGreetingSelected) {
    const imageElement = document.getElementById("specialImage");

    // Generate a random number between 0 and 100 for the probability distribution
    const randomChoice = Math.random() * 100;

    // Determine which image to show based on the random number
    if (randomChoice < 25) {
        imageElement.src = "/sillyguy.png";
    } else if (randomChoice < 50) {
        imageElement.src = "/ieatkids.png";
    } else if (randomChoice < 75) {
        imageElement.src = "/maxwell.png";
    } else {
        imageElement.src = "/petah.jpg";
    }

    imageElement.style.display = "block"; // Show the image
}
