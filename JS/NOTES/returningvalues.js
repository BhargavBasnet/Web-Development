
let player1Time = 102
let player2Time = 107

function getfastesttacetime()
{
    if (player1Time > player2Time)
    return player1Time;
    else if(player1Time < player2Time)
    return player2Time
    else
    return("tie");
}
let fastestRace = getfastesttacetime();
console.log("The Fastest Race Time Was",fastestRace);

function time()
{
    return player1Time+player2Time;
}

let totalTime = time();
console.log("Total time for the race was : ", totalTime);

