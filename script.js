let add = document.querySelector("#add");
let lower = document.querySelector("#lower");
let dcounterValue = document.querySelector("#counterValue");

let counter = 0;

add.addEventListener ("click", ()=>
{counter++;
counterValue.innerText = counter});

lower.addEventListener ("click", ()=>
{counter--;
counterValue.innerText = counter});

setInterval (()=>{
    if (counter <=-1) {
        counter++;
        counterValue.innerText = counter
    }
}, 0);


setInterval (()=>{
    if (counter >=51) {
        counter--;
        counterValue.innerText = counter
    }
}, 0);