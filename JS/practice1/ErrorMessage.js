let ErrorMessage = document.getElementById("error");
console.log(ErrorMessage);


function purchase()
{
    console.log("buttonClicked");
    ErrorMessage.textContent = "Something went worng, Please try again later!!";
    
}