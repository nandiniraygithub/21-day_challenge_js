// Define an array of objects representing cards
const CardArray = [
   {
       name: 'fries',
       img: 'img/fries.png'
   },
   {
       name: 'cheeseburger',
       img: 'img/cheeseburger.png'
   },
   {
       name: 'hotdog',
       img: 'img/hotdog.png'
   },
   {
       name: 'ice-cream',
       img: 'img/ice-cream.png'
   },
   {
       name: 'milkshake',
       img: 'img/milkshake.png'
   },
   {
       name: 'pizza',
       img: 'img/pizza.png'
   },
   // Ensure each card object is unique
   {
      name: 'fries',
      img: 'img/fries.png'
  },
  {
      name: 'cheeseburger',
      img: 'img/cheeseburger.png'
  },
  {
      name: 'hotdog',
      img: 'img/hotdog.png'
  },
  {
      name: 'ice-cream',
      img: 'img/ice-cream.png'
  },
  {
      name: 'milkshake',
      img: 'img/milkshake.png'
  },
  {
      name: 'pizza',
      img: 'img/pizza.png'
  }
];

// Shuffle the CardArray randomly
CardArray.sort(() => 0.5 - Math.random());

// Select the grid element from the DOM
const gridDisplay = document.querySelector('#grid');

// Select the result display element from the DOM
const resultDisplay = document.querySelector('#result');

// Initialize arrays to keep track of chosen cards and their IDs
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

// Function to create the game board dynamically
function createBoard() {
   for (let i = 0; i < CardArray.length; i++) {
       // Create an img element for each card
       const card = document.createElement('img');
       // Set initial attributes for the card element
       card.setAttribute('src', 'img/blank.png');
       card.setAttribute('data-id', i);
       // Add a click event listener to each card
       card.addEventListener('click', flipCard);
       // Append the card element to the grid display
       gridDisplay.appendChild(card);
   }
}

// Call the createBoard function to initialize the game board
createBoard();

// Function to check if the selected cards match
function checkMatch() {
   const cards = document.querySelectorAll('img');
   const optionOneId = cardsChosenIds[0];
   const optionTwoId = cardsChosenIds[1];

   // Check if the same card is clicked twice
   if (optionOneId == optionTwoId) {
       alert('You have clicked the same image!');
       return;
   }

   // Check if the names of the chosen cards match
   if (cardsChosen[0] === cardsChosen[1]) {
       alert('You found a match!');
       // Set the matched cards to a white image
       cards[optionOneId].setAttribute('src', 'images/white.png');
       cards[optionTwoId].setAttribute('src', 'images/white.png');
       // Remove click event listeners from matched cards
       cards[optionOneId].removeEventListener('click', flipCard);
       cards[optionTwoId].removeEventListener('click', flipCard);
       // Add the matched cards to the cardsWon array
       cardsWon.push(cardsChosen);
   } else {
       // If cards do not match, flip them back after a short delay
       setTimeout(() => {
           cards[optionOneId].setAttribute('src', 'images/blank.png');
           cards[optionTwoId].setAttribute('src', 'images/blank.png');
           alert('Sorry, try again');
       }, 1000);
   }

   // Update the result display with the number of cards won
   resultDisplay.textContent = cardsWon.length;

   // Clear the arrays for the next turn
   cardsChosen = [];
   cardsChosenIds = [];

   // Check if all pairs have been found
   if (cardsWon.length === (CardArray.length / 2)) {
       resultDisplay.textContent = 'Congratulations! You found them all!';
   }
}

// Function to flip a card when clicked
function flipCard() {
   const cardId = this.getAttribute('data-id');
   console.log(CardArray[cardId].name);
   // Add the name and ID of the clicked card to the respective arrays
   cardsChosen.push(CardArray[cardId].name);
   cardsChosenIds.push(cardId);

   console.log('Clicked', cardId);
   console.log(cardsChosen);

   // Set the src attribute of the clicked card to reveal its image
   this.setAttribute('src', CardArray[cardId].img);

   // Check if two cards have been chosen
   if (cardsChosen.length === 2) {
       // Delay the checkMatch function to allow time for the second card to be revealed
       setTimeout(checkMatch, 500);
   }
}
