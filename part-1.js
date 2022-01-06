// initiate package
const rs = require("readline-sync");

////////////////////////////////////
////////  GLOBAL VARIABLES ////////
////////////////////////////////////
let ship1 = 0,
	ship2 = 0,
	location = 0,
	i = 0;

let areShipsDestroyed = false,
	isShip1Destroyed = false,
	isShip2Destroyed = false,
	startOrEndGame = false;

const grid = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const selectedLocations = new Map();

////////////////////////////////////
////////      Functions     ////////
////////////////////////////////////
function startGame() {
	// const askToStart = rs.keyIn("Press any key to start the game.");
	// console.log(askToStart);
	console.log("");
	// assigning both ships to random value
	ship1 = grid[Math.floor(Math.random() * 9)];
	ship1 = grid[Math.floor(Math.random() * 9)];

	console.log(`
  ship1: ${ship1}
  ship2: ${ship2}
  `);
	// run as long as both ships not destroyed
	while (!areShipsDestroyed) {
		const locationToStrike = rs.question(
			"Enter a location/number to strike ie'5': ",
			{
				limit: /^[0-9]$/g,
				limitMessage:
					"Invalid character, please enter a number between 0 and 9",
			}
		);
		location = Number(locationToStrike);

		// check for any repetitive input
		if (selectedLocations.has(location)) {
			console.log(`You have already picked this location. Miss!
      `);
		}
		// store the location the user input
		i++;
		selectedLocations.set(location, i);

		console.log(locationToStrike);

		//validation
		if (location === ship1 && !isShip1Destroyed) {
			console.log(`Hit. You have sunk the first battleship. 1 ship remaining.
      `);
			isShip1Destroyed = true;
		} else if (location === ship2 && !isShip2Destroyed) {
			console.log(
				`Hit. You have sunk the second battleship. 1 ship remaining.
        `
			);
			isShip2Destroyed = true;
		} else if (location !== (ship1 && ship2)) {
			console.log(`You have missed!
      `);
		}
		//end loop when both ships destroyed
		if ((isShip1Destroyed && isShip2Destroyed) || ship1 === ship2) {
			areShipsDestroyed = true;
		}
	}
	endGame();
}
startGame();

function endGame() {
	startOrEndGame = rs.keyInYN(
		`                               
                                    Game Over
    You have destroyed all battleships. Would you like to play again? Y/N
    `,
		{
			limit: /^ny$/,
			limitMessage: "Invalid character, please press n for no or y for yes",
		}
	);
}
