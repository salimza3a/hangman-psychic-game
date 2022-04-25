var arrayMethods = ["reduce", "map", "filter", "find", "forEach", "sort", "includes", "indexOf", "slice"]
let underScore = document.getElementById('underScore')
let guessesLeft = document.getElementById('guessesLeft');
let losses = document.getElementById('losses')
let lossesPoint = 0
let wins = document.getElementById('wins')
let winsPoint = 0
let sehvLimiti = 9;
let lettersInChosenWord = []


guessesLeft.innerHTML = sehvLimiti;
// var underScore = document.getElementById('underScore')
wins.innerHTML = ` ${winsPoint}`
losses.innerHTML = lossesPoint
// underScore.innerHTML = x;


//  var x = arrayMethods.map(item => item.replace(  /./g, `${'_'} ` ).compRandomChoice)

//  console.log(x)

// var compRandomChoice = arrayMethods[Math.floor(Math.random()* arrayMethods.length)]

// console.log(compRandomChoice.length)



let randomWord = (arr) => {
    let randomFloorNum = Math.floor(Math.random() * arr.length)
    return arr[randomFloorNum]
};

let texminEdilecekSoz = randomWord(arrayMethods).toLowerCase();
console.log(texminEdilecekSoz)



let texminEdilecekSozAltdanXett = "_".repeat(texminEdilecekSoz.length).split('')
// console.log(texminEdilecekSozAltdanXett)

underScore.innerHTML = texminEdilecekSozAltdanXett.join(' ')



function startGame (e) {
    // console.log(e.key)
    let texminEdilenHerf = e.key
    let sozunIndeksi = texminEdilecekSoz.indexOf(texminEdilenHerf);
   
    console.log(sozunIndeksi)
    
    if(sozunIndeksi !== -1){
        texminEdilecekSozAltdanXett[sozunIndeksi] = texminEdilenHerf
        console.log(texminEdilecekSozAltdanXett)
        underScore.innerHTML = texminEdilecekSozAltdanXett.join(' ')
     
      let chosenWord =   lettersInChosenWord.push(texminEdilenHerf);
      if(chosenWord === texminEdilecekSoz.length) {
        winCount()
        alert("You won") 
        

      }   
     
        return
    }
//  console.log(texminEdilenHerf)
countMistakes()
        // console.log(sehvLimiti)

    wrongLetters (texminEdilenHerf)

}

window.onkeydown = startGame


function countMistakes() {
    sehvLimiti -= 1
    guessesLeft.innerHTML = sehvLimiti;
    

    if(sehvLimiti === 0) {
        alert("You lost")
        sehvLimiti = 9
        guessesLeft.innerHTML = sehvLimiti;
        lossesPoint += 1;
        losses.innerHTML = lossesPoint;
       
        
    }

    
}

function winCount() {
    winsPoint += 1;
    wins.innerHTML = winsPoint
}



function wrongLetters (word) {
    let wrongLetters = document.createElement("span");
    wrongLetters.innerHTML = ` ${word}`;
    document.getElementById('wrongLetters').appendChild(wrongLetters)
}



function resetGame () {

}