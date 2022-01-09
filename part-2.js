// initiate package
const rs = require("readline-sync");

////////////////////////////////////
////////  GLOBAL VARIABLES ////////
////////////////////////////////////

let twoUnitShip = "",
	threeUnitShip1 = "",
	threeUnitShip2 = "",
	fourUnitShip = "",
	fiveUnitShip = "",
	location = "",
	i = 0;

let areShipsDestroyed = false,
	startOrEndGame = false,
	isShip1Destroyed = false,
	isShip2Destroyed = false,
	isShip3Destroyed = false,
	isShip4Destroyed = false,
	isShip5Destroyed = false;

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
let locationArr = [];
const selectedLocations = new Map();

////////////////////////////////////
////////      Functions     ////////
////////////////////////////////////

// assigning ships to random value or location
function assignRandomValues() {
	let randomTwoUnitShip = Math.floor(Math.random() * locations.length);

	twoUnitShip = locations[randomTwoUnitShip][randomTwoUnitShip];
	locationArr.push(twoUnitShip);

	let randomThreeUnitShip1 = Math.floor(Math.random() * locations.length);

	threeUnitShip1 = locations[randomThreeUnitShip1][randomThreeUnitShip1];
	locationArr.push(threeUnitShip1);

	let randomThreeUnitShip2 = Math.floor(Math.random() * locations.length);

	threeUnitShip2 = locations[randomThreeUnitShip2][randomThreeUnitShip2];
	locationArr.push(threeUnitShip2);

	let randomFourUnitShip = Math.floor(Math.random() * locations.length);

	fourUnitShip = locations[randomFourUnitShip][randomFourUnitShip];
	locationArr.push(fourUnitShip);

	let randomFiveUnitShip = Math.floor(Math.random() * locations.length);

	fiveUnitShip = locations[randomFiveUnitShip][randomFiveUnitShip];
	locationArr.push(fiveUnitShip);

	locationArr.forEach((randomVal, i, arr) => {
		//restart function if the any ships overlay or in the same location
		if (arr.indexOf(randomVal) !== i) {
			locationArr = [];
			assignRandomValues();
		}
	});
}
assignRandomValues();

let remainingShips = locationArr.length;

function startGame() {
	const askToStart = rs.keyIn(`
	Press any key to start the game.`);
	console.log(askToStart);
	console.log("");

	// spread ships in random locations
	assignRandomValues();

	// // run as long as ships not destroyed
	while (!areShipsDestroyed) {
		const locationToStrike = rs.question(
			"To strike enter a location ie'f6','b3','c5' or etc... : ",
			{
				limit: /^[a-j][1-9]|10$/gi,
				limitMessage: `
Invalid character, please start with a letter from a to j followed by a number from 1 to 10 ie'f6'
				`,
			}
		);

		console.log(locationToStrike);

		location = locationToStrike.toLowerCase();

		// check for any repetitive input
		if (selectedLocations.has(location)) {
			console.log(`You have already picked this location. Miss!
			  `);
		}
		if (
			location !==
				(twoUnitShip ||
					threeUnitShip1 ||
					threeUnitShip2 ||
					fourUnitShip ||
					fiveUnitShip) &&
			!selectedLocations.has(location)
		) {
			console.log(`You have missed!
			`);
		}
		// store the location, the user input
		i++;
		selectedLocations.set(location, i);

		// // 	//validation
		if (location === twoUnitShip && !isShip1Destroyed) {
			remainingShips--;
			isShip1Destroyed = true;

			console.log(`Hit. You have sunk the two unit battleship. ${remainingShips} ships remaining.
			`);
		} else if (location === threeUnitShip1 && !isShip2Destroyed) {
			remainingShips--;
			isShip2Destroyed = true;

			console.log(
				`Hit. You have sunk the first three unit battleship. ${remainingShips} ships remaining.
				    `
			);
		} else if (location === threeUnitShip2 && !isShip3Destroyed) {
			remainingShips--;
			isShip3Destroyed = true;

			console.log(
				`Hit. You have sunk the second three unit battleship. ${remainingShips} ships remaining.
				    `
			);
		} else if (location === fourUnitShip && !isShip4Destroyed) {
			remainingShips--;
			isShip4Destroyed = true;

			console.log(
				`Hit. You have sunk the fourth unit battleship. ${remainingShips} ships remaining.
				`
			);
		} else if (location === fiveUnitShip && !isShip5Destroyed) {
			remainingShips--;
			isShip5Destroyed = true;

			console.log(
				`Hit. You have sunk the fifth unit battleship. ${remainingShips} ships remaining.
				`
			);
		}

		// 	//end while loop when all ships destroyed
		if (
			isShip1Destroyed &&
			isShip2Destroyed &&
			isShip3Destroyed &&
			isShip4Destroyed &&
			isShip5Destroyed
		) {
			areShipsDestroyed = true;
			console.log("all ships destroyed");
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
			limit: /^yn$/gi,
		}
	);

	if (startOrEndGame) {
		isShip1Destroyed = false;
		isShip2Destroyed = false;
		isShip3Destroyed = false;
		isShip4Destroyed = false;
		isShip5Destroyed = false;
		areShipsDestroyed = false;

		remainingShips = locationArr.length;
		selectedLocations.clear();
		startGame();
	}
}
