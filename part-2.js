// initiate package
const rs = require("readline-sync");

////////////////////////////////////
////////  GLOBAL VARIABLES ////////
////////////////////////////////////
let twoUnitShip = 0,
	threeUnitShip1 = 0,
	threeUnitShip2 = 0,
	fourUnitShip = 0,
	fiveUnitShip = 0,
	location = 0,
	i = 0;

let areShipsDestroyed = false,
	startOrEndGame = false;

const locations = [
	["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10"],
	["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10"],
	["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10"],
	["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10"],
	["e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "e10"],
	["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10"],
	["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "g10"],
	["h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10"],
	["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8", "i9", "i10"],
	["j1", "j2", "j3", "j4", "j5", "j6", "j7", "j8", "j9", "j10"],
];
console.log(`Locations =.length: ${locations.length}`);
const selectedLocations = new Map();

////////////////////////////////////
////////      Functions     ////////
////////////////////////////////////
function startGame() {
	// const askToStart = rs.keyIn(`
	// Press any key to start the game.`);
	// console.log(askToStart);
	console.log("");

	// assigning 5 ships to random value
	// twoUnitShip = grid[Math.floor(Math.random() * 9)];
	// threeUnitShip1 = grid[Math.floor(Math.random() * 9)];
	let randomTwoUnitShip = Math.floor(Math.random() * locations.length);
	twoUnitShip = locations[randomTwoUnitShip][randomTwoUnitShip];

	let randomThreeUnitShip1 = Math.floor(Math.random() * locations.length);
	let randomThreeUnitShip2 = Math.floor(Math.random() * locations.length);

	threeUnitShip1 = location[Math.floor(Math.random() * location.length)];
	threeUnitShip2 = location[Math.floor(Math.random() * location.length)];
	// fourUnitShip = grid[Math.floor(Math.random() * 9)];
	// fiveUnitShip = grid[Math.floor(Math.random() * 9)];
	console.log(twoUnitShip);

	// console.log(`
	//    twoUnitShip: ${twoUnitShip}
	//    threeUnitShip1: ${threeUnitShip1}
	//    threeUnitShip2: ${threeUnitShip2}
	//    fourUnitShip: ${fourUnitShip}
	//    fiveUnitShip: ${fiveUnitShip}
	// `);

	//restart game if both ships were in the same location
	// if (twoUnitShip === threeUnitShip1) {
	// 	console.log("true");
	// 	// startGame();
	// }

	// // run as long as both ships not destroyed
	// while (!areShipsDestroyed) {
	// 	const locationToStrike = rs.question(
	// 		"Enter a location/number between 0 and 9 to strike ie'5': ",
	// 		{
	// 			limit: /^[0-9]$/g,
	// 			limitMessage:
	// 				"Invalid character, please enter a number between 0 and 9",
	// 		}
	// 	);
	// 	console.log(locationToStrike);

	// 	location = Number(locationToStrike);

	// 	// check for any repetitive input
	// 	if (selectedLocations.has(location)) {
	// 		console.log(`You have already picked this location. Miss!
	//     `);
	// 	} else if (
	// 		location !== ship1 &&
	// 		location !== ship2 &&
	// 		!selectedLocations.has(location)
	// 	) {
	// 		console.log(`You have missed!
	//     `);
	// 	}
	// 	// store the location the user input
	// 	i++;
	// 	selectedLocations.set(location, i);

	// 	//validation
	// 	if (location === ship1 && !isShip1Destroyed) {
	// 		console.log(`Hit. You have sunk the first battleship. 1 ship remaining.
	//     `);
	// 		isShip1Destroyed = true;
	// 	} else if (location === ship2 && !isShip2Destroyed) {
	// 		console.log(
	// 			`Hit. You have sunk the second battleship. 1 ship remaining.
	//       `
	// 		);
	// 		isShip2Destroyed = true;
	// 	}
	// 	//end loop when both ships destroyed
	// 	if (isShip1Destroyed && isShip2Destroyed) {
	// 		areShipsDestroyed = true;
	// 	}
	// }
	// endGame();
}
startGame();

// function endGame() {
// 	startOrEndGame = rs.keyInYN(
// 		`
//                                     Game Over
//     You have destroyed all battleships. Would you like to play again? Y/N
//     `,
// 		{
// 			limit: /^yn$/gi,
// 		}
// 	);

// 	if (startOrEndGame) {
// 		isShip1Destroyed = false;
// 		isShip2Destroyed = false;
// 		areShipsDestroyed = false;
// 		selectedLocations.clear();
// 		startGame();
// 	}
// }
