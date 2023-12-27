
/*let button = document.getElementById("Button");

button.addEventListener("click",function(){
    console.log("I want to open the box!");
})

function Box(){
    console.log("button clicked using onclick");
}

const container = document.getElementById("container");
container.innerHTML = "<button onclick='buy()'>BUY!</button>"

function buy()
{
    container.innerHTML += "<p>thank you for buying!</p>"
}
*/
const recipitent = "james";
const sender = "Bhargav bahadur basnet";

//const email = "Hey" + recipitent + "! How is it going? Cheers Bhargav";

const email = ` Hey ${recipitent}
 ! How is it going?
  Cheers
   ${sender} 
   `
// you always need to include `` when using template strings and remove "" from previous one

console.log(email);