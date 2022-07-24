let container=document.querySelector('.container')
let display=document.querySelector('.display');
let button=Array.from(document.querySelectorAll('button'));

button.map(btn => {
    btn.addEventListener('click', evt => {
        if (evt.target.innerText=='C') {
            display.innerText=display.innerText.slice(0,-1);
        }
    
        else if (evt.target.innerText=='AC'){
            display.innerText=" ";
        }
        else if(evt.target.innerText=='='){
            display.innerText=eval(display.innerText)
        }
        else {
            display.innerText += evt.target.innerText;
        }
    })
})
