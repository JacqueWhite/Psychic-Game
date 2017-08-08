
alert("hello world");
var secertNum = Math.floor(Math.random()*26+1);
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
	
		if(parseInt(myNumber) !== secertNum){
			alert("The inputed is incorrect");
			guessLeft--;
			totalGuess.push(myNumber);
			 updateScore();	
			 if(parseInt(guessLeft) === 0){
			 	alert("you lost, you loser");
			 	loses++;	 	
			 	
			 	updateScore();
			 	// resetGame();
			 	 location.reload();
			 }
		}
		else if (parseInt(myNumber) === secertNum){
			// document.getElementById("output").innerHTML="My number is just right";
			alert("My number is just right");
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
        document.querySelector("#secertNum").innerHTML= "Your Secert Number: " + secertNum;
        // secertNum = Math.floor(Math.random()*26+1);

}  

// function resetGame(){
// var secertNum = 12;
// var guessLeft = 3;
// var wins = 0;
// var loses = 0;
// var totalGuess = [];

// } 
   