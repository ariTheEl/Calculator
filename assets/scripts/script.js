function addOperator(a,b) {
    return(a+b) 
}

function subtractOperator(a,b) {
    return(a-b) 
}

function multiplyOperator(a,b) {
    return(a*b) 
}

function divideOperator(a,b) {
    return(a/b) 
}

function operate (m,x,n) {
    if (x="+") {
        addOperator(m,n)
    }
    else if  (x="-") {
        subtractOperator(m,n)
    }
    else if  (x="*") {
        multiplyOperator(m,n)
    }
     else if  (x="/") {
        divideOperator(m,n)
    }
}


function populateDisplay () {
    let display=document.querySelector('.display');
    let numBtn=Array.from(document.querySelectorAll('.numberBtn'));
    let displayValue= numBtn.map(btn => { btn.addEventListener('click', evt => display.innerText += evt.target.innerText)} )}

    populateDisplay()

let display=document.querySelector('.display');
let allClear=document.querySelector("#allClear");
allClear.addEventListener('click', ()=> { 
        display.innerText=" "
    });

let clear =document.querySelector("#clear");
clear.addEventListener('click', ()=> { 
    display.innerText=display.innerText.slice(0,-1)
});
//
let decimalBtn=document.querySelector("#decimalBtn")
if (display.innerText.includes()==true) {
    decimalBtn.disabled='true'
}



