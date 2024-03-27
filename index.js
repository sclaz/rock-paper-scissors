/* 
play 
timer?
click button
make JS ramdomly select move
text - inform what JS seleced
text - (what beats what) - inform who won
restart
*/

/*const container = document.querySelector("#test");

const createBtn = document.createElement("button");
createBtn.textContent = "Create a new button";

let counter = 0;
createBtn.addEventListener("click", () => {
    const newBtn = document.createElement("button");
    const number = counter;
    counter += 1;
    newBtn.textContent = "Button " + number;
    newBtn.addEventListener("click", () => {
        console.log("clicked! " + number);
    });
    container.appendChild(newBtn);
});
container.appendChild(createBtn);*/

let rockBtn = document.querySelector("#rockBtn");
let paperBtn = document.querySelector("#paperBtn");
let scissorsBtn = document.querySelector("#scissorsBtn");

let computerMove = "";
let gameRunning = false;
const computerMoveText = document.querySelector("#computerMoveText");
const winnerText = document.querySelector("#winnerText");

const playGameBtn = document.querySelector("#playGameBtn");
playGameBtn.addEventListener("click", playGame);


//Do I use onload here?
//onload = gameTemplate();

/*
if(gameRunning == false) {
    rockBtn.style.display = 'none';
} else if(gameRunning == true){
    rockBtn.style.display = '';
}

if(gameRunning == false) {
    paperBtn.style.display = 'none';
} else if(gameRunning == true){ 
    paperBtn.style.display = '';
}


if(gameRunning == false) {
    scissorsBtn.style.display = 'none';
} else if(gameRunning == true){ 
    scissorsBtn.style.display = '';
}

*/

function playGame(){  
    gameRunning = true;    
    document.getElementById("rockBtn").addEventListener("click", () => {
        initiateComputerMove();
        rockBtnWinner();
    });
    
    document.getElementById("paperBtn").addEventListener("click", () => {
        initiateComputerMove();
        paperBtnWinner();
    });
    
    document.getElementById("scissorsBtn").addEventListener("click", () => {
        initiateComputerMove();
        scissorsBtnWinner();
    });

    hidePlayGameBtn();
}


function initiateComputerMove(){
    const randomNumber = Math.random();
    if(randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = "Rock";        
    } else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = "Paper";   
    }if(randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors"; 
    }

    computerMoveText.textContent = `The computer picks ${computerMove}`;
}


function hidePlayGameBtn(){
    if(gameRunning = true) {
        playGameBtn.style.display = 'none';
    } else { 
        playGameBtn.style.display = '';
    }
}


function rockBtnWinner(){
    if(computerMove === "Rock"){
        winnerText.textContent = "It's a draw!";
    } else if(computerMove === "Paper"){
        winnerText.textContent = "You lose!";
    } else if(computerMove === "Scissors"){
        winnerText.textContent = "You win!";
}
}


function paperBtnWinner(){
    if(computerMove === "Rock"){
        winnerText.textContent = "You win!";
    } else if(computerMove === "Paper"){
        winnerText.textContent = "It's a draw!";
    } else if(computerMove === "Scissors"){
        winnerText.textContent = "You lose!";
}
}


function scissorsBtnWinner(){
    if(computerMove === "Rock"){
        winnerText.textContent = "You lose!";
    } else if(computerMove === "Paper"){
        winnerText.textContent = "You win!";
    } else if(computerMove === "Scissors"){
        winnerText.textContent = "It's a draw!";
}
}
