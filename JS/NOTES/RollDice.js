
/********************* METHOD 1 *************************************/

let randomNumber = Math.floor(Math.random()*6)+1;
function rolldice()
{
    console.log(" From Method1 You just rolled number :",randomNumber);
}
rolldice();


/********************** METHOD 2 *********************************/

function rolldice2()
{
    let randomNumber2 = Math.floor(Math.random()*6)+1;
    return (randomNumber2);
}

console.log(" From Method2 You Just Rolled Number :",rolldice2());

