// initiate package
const rs = require("readline-sync");

////////////////////////////////////
////////  GLOBAL VARIABLES ////////
////////////////////////////////////
let ship1 = 0,
	ship2 = 0,
	location = 0;

let areShipsDestroyed = false,
	isShip1Destroyed = false,
	isShip2Destroyed = false;

const grid = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

////////////////////////////////////
////////      Functions     ////////
////////////////////////////////////
function startGame() {
	// const askToStart = rs.keyIn("Press any key to start the game.");
	// console.log(askToStart);
	console.log("");
	// assigning both ships to random value
	ship1 = grid[Math.floor(Math.random() * 9)];
	ship2 = grid[Math.floor(Math.random() * 9)];
	console.log(`
  ship1: ${ship1}
  ship2: ${ship2}
  `);
	// run as long as both ships not destroyed
	while (areShipsDestroyed === false) {
		const locationToStrike = rs.question(
			"Enter a location/number to strike ie'5': ",
			{
				limit: /^[0-9]$/g,
				limitMessage:
					"Invalid character, please enter a number between 0 and 9",
			}
		);
		ship1 = 1;
		ship2 = 1;
		console.log(`
  ship1: ${ship1}
  ship2: ${ship2}
  `);

		location = Number(locationToStrike);

		console.log(locationToStrike);
		//validation
		if (
			location !== ship1 &&
			isShip1Destroyed &&
			location !== ship2 &&
			isShip2Destroyed
		) {
			console.log("You have missed!");
		} else if (location === ship1) {
			console.log("Hit. You have sunk the first battleship. 1 ship remaining.");
			isShip1Destroyed = true;
		} else if (location === ship2) {
			console.log(
				"Hit. You have sunk the second battleship. 1 ship remaining."
			);
			isShip2Destroyed = true;
		} else if (
			(isShip1Destroyed && isShip2Destroyed) ||
			location === (ship1 && ship2)
		) {
			areShipsDestroyed = true;
		}
		// else if (location === location) {
		// console.log("does the location === to its self?");
		// console.log(location === location);
		// console.log("You have already picked this location. Miss!");
		// }
	}
	endGame();
}
startGame();

function endGame() {
	const startOrEndGame = rs.keyInYN(
		"You have destroyed all battleships. Would you like to play again? Y/N"
	);
}
