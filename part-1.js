// initiate package
const rs = require("readline-sync");

////////////////////////////////////
////////  GLOBAL VARIABLES ////////
////////////////////////////////////
let ship1 = 0,
	ship2 = 0;
const grid = [1, 2, 3, 4, 5, 6, 7, 8, 9];

////////////////////////////////////
////////      Functions     ////////
////////////////////////////////////

function startGame() {
	// const askToStart = rs.keyIn("Press any key to start the game.");
	// console.log(askToStart);
	console.log("");
	// const randomNumber = Math.floor(Math.random() * 10);
	ship1 = Math.floor(Math.random() * 10);
	ship2 = Math.floor(Math.random() * 10);
	// assigning both ships to random value
	// ship1 = randomNumber;
	// ship2 = randomNumber;
	console.log(`Ship one: ${ship1}`);
	console.log(`Ship two: ${ship2}`);
}
startGame();
