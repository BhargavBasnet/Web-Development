
let sentence = ["hello", "my", "name", "is", "Per"];
let greetingsEl = document.getElementById("greetings-el");

for(i=0;i<sentence.length;i++)
{
    greetingsEl.textContent = greetingsEl.textContent + " " + sentence[i];
   
    
}