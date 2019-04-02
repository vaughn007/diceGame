function rollDice () {
  var highestDiceRoll = 0;
  var winner;

  var player1 = ['images/dice1.png',
  'images/dice2.png', 'images/dice3.png','images/dice4.png',
  'images/dice5.png','images/dice6.png'];

  var player2 = ['images/dice1.png',
  'images/dice2.png', 'images/dice3.png','images/dice4.png',
  'images/dice5.png','images/dice6.png'];

  //two dices that will have 6 dots when game start. Same dice value
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");

  //document.querySelector(".img1").src = player1[randPlayer1]; //this work to
  //document.querySelector(".img2").src = player2[randPlayer2];


var randPlayer1 = Math.floor(Math.random() * player1.length);
var randPlayer2 = Math.floor(Math.random() * player2.length);

var diceRolls = player1[randPlayer1] + " " + player2[randPlayer2];


if (performance.navigation.type == 1) {
   // when page is refreshed, update image source to a random dice image
  document.querySelector(".img1").setAttribute("src", player1[randPlayer1]);
  document.querySelector(".img2").setAttribute("src", player2[randPlayer2]);

  if (randPlayer1 > randPlayer2) {
     highestDiceRoll = player1;
     winner = document.querySelector("h1").innerHTML = "Player1 Won";
   } else if (randPlayer2 > randPlayer1) {
     highestDiceRoll = player2;
     winner = document.querySelector("h1").innerHTML = "Player2 Won";
   } else {
     winner = document.querySelector("h1").innerHTML = "DRAW";
   }
}

}
rollDice();


function refreshPage(){
    window.location.reload();
}


// function rollDice () {  //not working
//   //two dices that will have 6 dots when game start. Same dice value
//   document.querySelector(".img1").setAttribute("src", "images/dice6.png");
//   document.querySelector(".img2").setAttribute("src", "images/dice6.png");
//
//   var highestDiceRoll = 0;
//   var winner;
//
//   var player1 = ['<img src="images/dice1.png" alt="Italian Trulli">',
//   '<img src="images/dice2.png" alt="Italian Trulli">',
//   '<img src="images/dice3.png" alt="Italian Trulli">',
//   '<img src="images/dice4.png" alt="Italian Trulli">',
//   '<img src="images/dice5.png" alt="Italian Trulli">',
//   '<img src="images/dice6.png" alt="Italian Trulli">'];
//
//   var player2 = ['<img src="images/dice1.png" alt="Italian Trulli">',
//   '<img src="images/dice2.png" alt="Italian Trulli">',
//   '<img src="images/dice3.png" alt="Italian Trulli">',
//   '<img src="images/dice4.png" alt="Italian Trulli">',
//   '<img src="images/dice5.png" alt="Italian Trulli">',
//   '<img src="images/dice6.png" alt="Italian Trulli">'];
//
//
// var randPlayer1 = Math.floor(Math.random() * player1.length);
// var randPlayer2 = Math.floor(Math.random() * player2.length);
//
// var diceRolls = player1[randPlayer1] + " " + player2[randPlayer2];
//
//
// if (performance.navigation.type == 1) {
//    // when page is refreshed, update image source to a random dice image
//   document.querySelector(".img1").setAttribute("src", "randPlayer1");
//   document.querySelector(".img2").setAttribute("src", "randPlayer2");
//
//   if (randPlayer1 > randPlayer2) {
//      highestDiceRoll = player1;
//      winner = document.querySelector("h1").innerHTML = "Player1 Won";
//    } else if (randPlayer2 > randPlayer1) {
//      highestDiceRoll = player2;
//      winner = document.querySelector("h1").innerHTML = "Player2 Won";
//    } else {
//      winner = document.querySelector("h1").innerHTML = "DRAW";
//    }
// }
//
// }
// rollDice();
