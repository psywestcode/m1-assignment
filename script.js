// -----------------------------------------------------------
// Variables & Arrays
// -----------------------------------------------------------

// Array for text information
let infoTextArray = [
    "White Cloud is known for its low smoke and clean scent, inspired by the clouds over Kyoto.",
    "Myo-kaku represents enlightenment and is often used for serious meditation sessions.",
    "Morning Star Earth creates a grounding atmosphere, perfect for reading or relaxing.",
    "Saffron is one of the most expensive spices, adding a luxurious warmth to this masala blend.",
    "Oudh (Agarwood) is often called 'liquid gold' due to its rarity and deep, resinous scent.",
    "Hand-rolled by nuns, this incense supports the monastery and uses ancient Himalayan recipes.",
    "Tokusen is a 'body incense' meant to be rubbed on skin or clothes, not just burned.",
    "This agarwood blend is sourced from high-altitude forests, offering a scent of pure wilderness."
];

// Variables for open and close tags
let openHeading = "<h2>";
let closeHeading = "</h2>";
let openPara = "<p>";
let closePara = "</p>";
let openLink = "<a href='#' id='close-link'>"; // ID added here to target it later
let closeLink = "</a>";

// Variable for the text to close info box
let closeText = "Click This To Close";


// -----------------------------------------------------------
// DOM Interaction
// -----------------------------------------------------------

// Get the Info Box container
let infoBox = document.getElementById("info-box");

// Select all description paragraphs (the triggers) and titles
let descriptionTriggers = document.querySelectorAll(".incense-card__description");
let titles = document.querySelectorAll(".incense-card__title");


// Loop through all triggers to add event listeners
for (let i = 0; i < descriptionTriggers.length; i++) {
    
    descriptionTriggers[i].addEventListener("click", function() {
        
        // 1. Get Content
        let headingContent = titles[i].innerHTML;
        let textContent = infoTextArray[i];

        // 2. Build HTML String using variables
        // This creates the 3 separate areas (heading, info, link)
        let boxContent = openHeading + headingContent + closeHeading + 
                         openPara + textContent + closePara + 
                         openLink + closeText + closeLink;

        // 3. Inject Content
        infoBox.innerHTML = boxContent;

        // 4. Show Box
        infoBox.style.visibility = "visible";

        // 5. Add Close Functionality
        // We attach this listener newly every time the box opens because the link is re-created
        document.getElementById("close-link").addEventListener("click", function(event) {
            event.preventDefault(); // Stop page from jumping to top
            infoBox.style.visibility = "hidden";
        });

    });
}