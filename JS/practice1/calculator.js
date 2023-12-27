
let num1 = 8;
let num2 = 2;
document.getElementById("num1").textContent = num1;
document.getElementById("num2").textContent = num2;


let Result = document.getElementById("Result");


function Add()
{
    let sum = num1 + num2;
    Result.textContent = "Sum:" + sum ;  //inner text le chai hidden content display gardaina
                                         // " - " yesma vako spaces innertext le display gardaina
                                         // tei vayera innertext ko alternate vaneko chai textcontent ho
}

function Subtract()
{
    let Sub = num1 - num2;
    Result.textContent = "Sub:" + Sub ;

}

function Multiply()
{
    let Mul = num1 * num2;
    Result.textContent = "Mul:" + Mul ;

}

function Divide()
{
    let Div = num1 / num2;
    Result.textContent = "Div:" + Div ;

}


