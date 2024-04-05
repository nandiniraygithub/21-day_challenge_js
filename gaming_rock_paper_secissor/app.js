// Here we're getting references to various HTML elements by their IDs
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

// We're selecting all buttons on the page
const possibleChoices = document.querySelectorAll('button');

// We're creating variables to store the choices and result
let userChoice;
let computerChoice;
let result;

// For each button, we're adding an event listener that triggers when clicked
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    // When a button is clicked, we store its ID as the user's choice
    userChoice = e.target.id;

    // We display the user's choice on the page
    userChoiceDisplay.innerHTML = userChoice;

    // We generate a random choice for the computer
    generateComputerChoice();

    // We determine the result of the game
    getResult();
}));

// This function randomly chooses rock, paper, or scissors for the computer
function generateComputerChoice() {
    // We generate a random number between 1 and 3
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    // Depending on the random number, we assign rock, paper, or scissors to the computer
    if (randomNumber === 1) {
        computerChoice = 'rock';
    } else if (randomNumber === 2) {
        computerChoice = 'scissors';
    } else if (randomNumber === 3) {
        computerChoice = 'paper';
    }

    // We display the computer's choice on the page
    computerChoiceDisplay.innerHTML = computerChoice;
}

// This function determines the result of the game
function getResult() {
    // If the user's choice is the same as the computer's choice, it's a draw
    if (computerChoice === userChoice) {
        result = '🤷 It\'s a draw!';
    } else if ((computerChoice === 'rock' && userChoice === 'paper') || // User wins if they chose paper and computer chose rock
               (computerChoice === 'paper' && userChoice === 'scissors') || // User wins if they chose scissors and computer chose paper
               (computerChoice === 'scissors' && userChoice === 'rock')) { // User wins if they chose rock and computer chose scissors
        result = '😎 You win!';
    } else {
        // If none of the above conditions are met, the user loses
        result = '😒 You lose!';
    }

    // We display the result on the page
    resultDisplay.innerHTML = result;
}
//------------------------------------------------------
// Sure! Let's break it down step by step:

// // 1. **Document Object Model (DOM):** The Document Object Model is a programming interface for web documents. It represents the structure of an HTML document as a tree, where each node corresponds to a part of the document (such as elements, attributes, and text). 
// In this game, we're using the DOM to interact with HTML elements on the page.

// // 2. **getElementById():** This method is used to retrieve an HTML element from the document by its unique ID. 
// In the code, `document.getElementById('computer-choice')`, 
// `document.getElementById('user-choice')`, and `document.getElementById('result')` 
// are used to get references to the HTML elements where we'll display the computer's choice, the user's choice, and the game result, respectively.

// // 3. **querySelectorAll():** This method is used to select all elements in the document that match a specified CSS selector. 
// In the code, `document.querySelectorAll('button')` selects all button elements on the page. 
// These buttons likely represent the choices available to the user in the game (rock, paper, and scissors).

// // 4. **Math.floor() and Math.random():** These functions are used to generate a random number.
//  `Math.random()` generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
//   By multiplying this random number by 3 and adding 1 (`Math.random() * 3 + 1`), we get a random number between 1 and 3. `Math.floor()` then rounds this number down to the nearest integer, giving us a random integer between 1 and 3 inclusive.

// // 5. **User Interaction:** When a user clicks on one of the buttons (representing their choice of rock, paper, or scissors), an event listener attached to each button triggers. 
// This event listener updates the `userChoice` variable with the ID of the button clicked
//  (representing the user's choice). It also displays the user's choice on the page.

// // 6. **Generating Computer's Choice:** After the user makes their choice, the `generateComputerChoice()` function is called. 
// This function generates a random choice for the computer using the logic described above. 
// It updates the `computerChoice` variable and displays the computer's choice on the page.

// // 7. **Determining the Result:** Once both the user and computer have made 
// their choices, the `getResult()` function is called. This function compares the user's 
// choice with the computer's choice to determine the result of the game (win, lose, or draw). 
// It updates the `result` variable accordingly and displays the result on the page.

// // Overall, the game logic involves user interaction through button clicks, generating random choices for the computer, 
// and determining the outcome based on the choices made by the user and the computer. 
// It's a simple implementation of the classic rock-paper-scissors game using HTML, CSS, and JavaScript.