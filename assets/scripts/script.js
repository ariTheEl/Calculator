//create functions for each of the operators.
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

//the operate function will call any of the following operator functions when the corresponding button is clicked
function operate (m,x,n) {
    if (x==="+") {
         return addOperator(m,n)
    }
    else if  (x==="-") {
        return subtractOperator(m,n)
    }
    else if  (x==="*") {
         return multiplyOperator(m,n)
    }
     else if  (x==="/") {
        return divideOperator(m,n)
    }
}

//prevents the user from entering the decimal point more than once for a particular operand
function decimalDisable() {
    let decimalBtn=document.querySelector("#decimalBtn")
    if (display.innerText.includes('.')==true) {
    decimalBtn.disabled=true}
    else {
        decimalBtn.disabled=false
    }
}

//populates the display div with numbers when clicked, also calls the decimalDisable button
function populateDisplay () {
    let display=document.querySelector('.display');
    let numBtn=document.querySelectorAll('.numberBtn');
    numBtn.forEach(button => {
        button.addEventListener('click', evt => {
            display.innerText += evt.target.innerText;
            decimalDisable()
        })
    })
}

let lhs;
let rhs;
let op;
document.querySelectorAll('.operator').forEach((btn) =>
btn.addEventListener('click',() => {
    const operatorMap={
        add:'+',
        subtract:'-',
        multiply:'*',
        divide:'/'
    };
    const operation=operatorMap[btn.id];
    const display=document.querySelector('.display');
    const currentText=display.innerText;

    if (btn.id==='equals'){
        console.log(Number(lhs),op,Number(currentText));
        const result=operate(Number(lhs),op,Number(currentText));
        console.log('result', result);

        lhs=op=undefined;
        return display.innerText=result
    }
    lhs=currentText;
    op=operation;
    display.innerText ='';
    console.log('lhs', lhs);
    console.log('operation is', operation);

}));

populateDisplay();

let display=document.querySelector('.display');
let allClear=document.querySelector("#allClear");
allClear.addEventListener('click', ()=> { 
        display.innerText=" "
    });

let clear =document.querySelector("#clear");
clear.addEventListener('click', ()=> { 
    display.innerText=display.innerText.slice(0,-1)
});







