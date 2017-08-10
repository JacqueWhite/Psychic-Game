alert("BEAT THE COMPUTER");
var secretNum = Math.floor(Math.random()*10+1);
// var secertNum = 12;
var guessLeft = 3;
var wins = 0;
var loses = 0;
var totalGuess = [];

// var myNumber= 26
 updateScore();
 
 function checkNumber() {
		
	var guess = document.getElementById("guess");
	var myNumber = guess.value;
	
		if(parseInt(myNumber) !== secretNum){
			alert("Nope.");
			guessLeft--;
			totalGuess.push(myNumber);
			 updateScore();	
			 if(parseInt(guessLeft) === 0){
			 	alert("Oh, nooo. You lost");
			 	loses++;	 	
			 	
			 	updateScore();
			 	// resetGame();
			 	 location.reload();
			 }
		}
		else if (parseInt(myNumber) === secretNum){
			// document.getElementById("output").innerHTML="My number is just right";
			alert("Nice!");
			totalGuess.push(myNumber);
			wins++;
			updateScore();
		}
		
  	
 }
function updateScore() {
		document.querySelector("#Wins").innerHTML = "Wins: " + wins;
		document.querySelector("#Loses").innerHTML= "Loses: " + loses;
		document.querySelector("#numberOfGs").innerHTML="Your Guesses so far: " + totalGuess;
        document.querySelector("#guessLeft").innerHTML = "Guesses Left: " + guessLeft;
        document.querySelector("#secretNum").innerHTML= '<span style= color:white> secret number</span>'; + secretNum;
        // secertNum = Math.floor(Math.random()*26+1);

} 
   