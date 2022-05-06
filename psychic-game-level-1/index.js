
let compChoice;
let userChoice;
let guessesLeft = 9;

let wins = 0;

let losses = 0;

let letters = 'abcdef'

let guessesLetters =[]

// User Choice
function f1(event) {
	guessesLetters.push(event)
	

	userChoice = event

	console.log(userChoice)
	f2()
	f6()
}

// Comp Choice
function f2() {
	
	let randomLetters = letters[Math.floor(Math.random() * letters.length)]
	compChoice = randomLetters;
	f3(userChoice,compChoice)
	console.log(compChoice)


}
// Compare 
function f3(userChoice, compChoice) {
	if(userChoice === compChoice) {
		f4()
		f7()
	}else {
		console.log(guessesLeft -= 1)
		f6()

		if(guessesLeft === 0) {

		f5()
		f6()
		f7()

		
		}
	}
}

// Wins
function f4() {
	
	console.log("wins",wins+=1)
	f6()
}
// Losses
function f5() {


	console.log("losses",losses+=1)

	f6()
	
}

// Updating UI
function f6() {
	document.getElementById('wins').innerHTML = `Wins: ${wins}`;
	document.getElementById('losses').innerHTML = `Losses: ${losses}`;
	document.getElementById('guessesLeft').innerHTML = `Guesses Left: ${guessesLeft}`;
	document.getElementById('wrongGuesses').innerHTML = `Your Guesses so far: ${guessesLetters.join()} `;
}

f6()

// Resetting UI
function f7() {
	guessesLeft = 9;
	guessesLetters = [];
	f6()

	
}



window.onkeydown = function (e) {
	f1(e.key)
}

