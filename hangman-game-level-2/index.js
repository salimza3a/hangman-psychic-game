let words = ["soort", "maap", "reduce", "frilter", "findi"];

 let chosenWord = "";

 let lettersInChosenWord = [];

 let underScoreWords = [];

 let wrongGuesses = [];



 // game counters

 let winCounter = 0;

 let lossCounter = 0;

 let guessesLeft = 9;



 function startGame () {
 	guessesLeft = 9;

 	chosenWord = words[Math.floor(Math.random() * words.length)]

 	lettersInChosenWord = chosenWord.split('')

 	console.log("hello" , lettersInChosenWord)


 	for(let i = 0; i<lettersInChosenWord.length; i++) {
 		underScoreWords.push("_")
 	}
 	console.log("underScoreWords",underScoreWords)



 	document.getElementById('underScore').innerHTML = underScoreWords.join(' ');



 }

function checkLetters(letter) {


	let letterInWord = false;

	for(let i = 0; i < lettersInChosenWord.length ; i++) {
		if(chosenWord[i] === letter) {

			letterInWord = true;
		}
	}

	if(letterInWord) {
		for( let i  = 0; i < lettersInChosenWord.length ; i++) {

			if(chosenWord[i] === letter) {
				underScoreWords[i] = letter;
			}
		}
	
	} 
	else {
		wrongGuesses.push(letter)
		guessesLeft--;
	}
}

function roundComplete () {


	document.getElementById('guessesLeft').innerHTML = guessesLeft;

	 	document.getElementById('underScore').innerHTML = underScoreWords.join(' ');

	 	document.getElementById('wrongLetters').innerHTML = wrongGuesses.join(' ');

	 	if(lettersInChosenWord.toString() === underScoreWords.toString()) {
	 		winCounter++;
	 		alert("you win")
	 		document.getElementById('wins').innerHTML = winCounter;
	 		startGame()
	 	}
	 	else if(guessesLeft === 0) {
	 		lossCounter++;

	 		alert("you lost");

	 		document.getElementById('losses').innerHTML = lossCounter;

	 		startGame()
	 	}
}

 startGame()

document.onkeydown = function (event) {

	checkLetters(event.key)

	roundComplete()
}