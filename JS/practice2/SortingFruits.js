
let fruits = ["🍎","🧡","🍎","🧡"];
let appleShelf = document.getElementById("apple-Shelf");
let orangeShelf = document.getElementById("orange-Shelf");

function fruit()
{
    for(i=0;i<fruits.length;i++)
    {
        if(fruits[i] === "🍎")
        {
            appleShelf.textContent += "🍎" ;

        }
        else{
            orangeShelf.textContent += "🧡" ;

        }
    }
}
fruit();