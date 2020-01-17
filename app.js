/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;

init();

//0 is the first player and 1 is the second player

//Dice Creation
// Includes randomness
//Creating a dice

//Selecting Elements in Javascript
///document.querySelector("#current-" + activePlayer).textContent = dice;

//document.querySelector("#current-" + activePlayer).innerHTML = '<em>' + dice + '</em>';
// Every time you write html in javaScript code it needs to be a string, the tags would also have
// quotes around them too
// "<em>" element "</em>" means italic text


// To read the value of this content and store it in the variable
//var x = document.querySelector("#score-0").textContent;
//console.log(x);

// query selector to change the CSS element of an object
// Hash (#) for HTML while Dot(.) for CSS
// general format : style.property = "value";
/**************** CODE BELOW */
/*
document.querySelector(".dice").style.display = "none";
// document (getting the element by ID) -- this is faster than querySelector
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
*/
/** Code end  */
//Events 
///Anonymous function, a function that cannot be resued
document.querySelector(".btn-roll").addEventListener("click", function (){
    //Do something here
    //1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;
    //2. Display the result
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src= "dice-" + dice + ".png";

    //3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1){
        //Add Score
        roundScore = roundScore + dice; // Update roundScore
        document.querySelector("#current-" + activePlayer).textContent = roundScore; // Display the Roundscore
    } else{
        //Next Player
        nextPlayer();

    }

});

/* document.querySelector(".btn-new").addEventListener("click",function(){
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

});

*/

document.querySelector(".btn-hold").addEventListener("click", function() {
    // Add current score to global score
    scores[activePlayer] += roundScore;
    //scores[activePlayer] = scores[activePlayer] + roundScore;

    //Update the UI
    document.querySelector("#score-" + activePlayer).textContent= scores[activePlayer];
    //Check if the player won the game
    if(scores[activePlayer] >= 25) {
        document.querySelector("#name-" + activePlayer).textContent = "Winner";
        document.querySelector(".dice").style.display ="none";
        document.querySelector(".player-"+activePlayer + "-panel").classList.add("Winner");
        document.querySelector(".player-"+activePlayer + "-panel").classList.remove("Active");
  
    } else {
        //Next Player
        nextPlayer();
    }

    

})

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
    roundScore = 0;
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

}

document.querySelector(".btn-new").addEventListener("click", init);
    


function init(){
    scores = [0,0]
    activePlayer = 0;
    roundScore =0;

    document.querySelector(".dice").style.display = "none";
// document (getting the element by ID) -- this is faster than querySelector
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";


    document.querySelector("#name-0").textContent = "Player 1";
    document.querySelector("#name-1").textContent = "Player 2";

    document.querySelector(".player-0-panel").classList.remove("Winner");
    document.querySelector(".player-1-panel").classList.remove("Winner");
    

    document.querySelector(".player-0-panel").classList.remove("Active");
    document.querySelector(".player-1-panel").classList.remove("Active");
    document.querySelector(".player-0-panel").classList.add("Active");

}