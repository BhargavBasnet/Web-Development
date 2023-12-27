//Defining object player and inside it are keys
//To make object remember : USE ":" instead of "="
//                        : USE , after instead of ; 

//Functions inside Objects are called Methods.

let player = {
    nam : "bhargav",
    chips : 145,
    sayHello : function()
    {
        console.log("heisann");
    }
}

player.sayHello(); // same like object.getelementbyId()  and Math.random()

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = {};
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("card-el");

//Defining object player and inside it are keys
//To make object remember : USE ":" instead of "="
//                        : USE , after instead of ; 



let playerEl = document.getElementById("Player-el");
playerEl.textContent = player.nam + ": $" + player.chips;


console.log(cards);

function getrandomcard()
{
    let randomNumber = Math.floor(Math.random()*13)+1; // Displays values ranging from 1 - 13.999
                                             // If +1 nagareko vaye chai 0 - 12.999 samma display hunthiyo
    if(randomNumber === 1)
    {
        console.log("Random Number just generated 1 so we returned 11"); // Ace card lai chai 11 denote
        return 11; 
    }
   
    else if(randomNumber > 10)
    {
        // King,Jack,Queen lai chai hami le 10 denote gareko
        console.log("Random Number just generated either 11 or 12 or 13 so we returned 10");
        return 10;
    }
    else
    {
        return randomNumber;
    }
   
}

function startGame()
{
    isAlive = true;
    let firstcard = getrandomcard();
    let secondcard = getrandomcard();
    cards = [firstcard,secondcard];
    sum += cards[0]+cards[1];
    renderGame();
}

function renderGame()
{
    console.log("Game has Officially Started");
    console.log("Total sum of your cards is : ", sum);

    cardsEl.textContent = "Cards: ";

    for(i=0;i<cards.length;i++)
    {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum : " + sum;
    if(sum <= 20)
{
    message = ("do you want to draw a new card?");
}
else if (sum===21)
{
    message = ("wohoo! you've got BlackJack");
    hasBlackJack = true;
    
}
else
{
    message = ("you're out of the game");
    isAlive = false;
    message = "We're logging out";
}
messageEl.textContent = message;  /*console.log(message);*/
console.log(hasBlackJack);
console.log(isAlive);
}

function newcard()
{
    if(isAlive === true && hasBlackJack === false )
    {
   let card = getrandomcard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame()
    }
    else{
        console.log("you're out of the game");
    }
}




