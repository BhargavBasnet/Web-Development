

let countEl = document.getElementById ("count-el")
let saveEl = document.getElementById ("save-el")



let count = 0
function increment()
{
    count += 1 ;
    countEl.innerText = count
}

function save()
{
    let countstr = count + " - "
    saveEl.textContent += countstr;
    console.log(count);
    countEl.textContent=0;
    count = 0;
}












/*let a = 0;

function lap()
{
    a = a + 1
}
lap()
lap()
lap()

console.log(a);*/
