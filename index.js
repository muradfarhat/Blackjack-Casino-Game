let player = {
    name: "Per",
    chips: 200
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.querySelector("#card-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard(){
    let randomCard = Math.floor((Math.random() * 13)) + 1;
    if(randomCard === 1){
        return 11;
    }else if(randomCard >= 11){
        return 10;
    }else{
        return randomCard;
    }
}

function startGame(){
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = cards[0] + cards[1];
    renderGame();
}

function renderGame(){
    if(sum <= 20){
        message = "Do you want to draw a new card?";
    }else if(sum === 21){
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    }else {
        message = "You're out of the game!";
        isAlive = false;
    }
    
    cardEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    messageEl.textContent = message;
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let anotherCard = getRandomCard();
        sum += anotherCard;
        cards.push(anotherCard);
        renderGame();
    }
}