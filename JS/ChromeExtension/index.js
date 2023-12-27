
let myleads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

const ulEl = document.getElementById("ul-el");

//console.log(localStorage.setItem("myleads"));



inputBtn.addEventListener('click',function(){
   // myleads.push("www.wesomelead.com");

   myleads.push(inputEl.value); //syntax:document.getElementByID("").value
   renderLeads();
   inputEl.value = '';
})

function renderLeads()
{
let listItems = "";
for(let i=0;i<=myleads.length;i++)
{
    //listItems += "<li><a target = '_blank' href='" + myleads[i] + "'>" + myleads[i] + "</a></li>"

    //Instead of using this you can use template Strings

    listItems += `
    <li>
        <a target='_blank' href=${myleads[i]}> 
        ${myleads[i]}
        </a>
    </li>
    `


    //ulEl.innerHTML += "<li>" + myleads[i] + "</li>" //using innerHTML you can integrate html code in JS.
    
    //You can use either this OR,

    /*const li = document.createElement("li");
    li.textContent = myleads[i];
    ulEl.append(li);*/
}
ulEl.innerHTML = listItems;
}







