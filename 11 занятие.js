let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let div1 = document.getElementById('div1');
div1 = 0;
div1.innerText = div1;

function makeRed(){
    button1.classList.add('red')
    button1.classList.remove('green');
    button1.classList.remove('blue');
    button2.classList.add('red')
    button2.classList.remove('green');
    button2.classList.remove('blue');

}

function makeGreen(){
    button1.classList.add('green')
    button1.classList.remove('red');
    button1.classList.remove('blue');
    button2.classList.add('green')
    button2.classList.remove('red');
    button2.classList.remove('blue');

}

function makeBlue(){
    button1.classList.add('blue')
    button1.classList.remove('green');
    button1.classList.remove('red');
    button2.classList.add('blue')
    button2.classList.remove('green');
    button2.classList.remove('red');

}

function Plus1(){
    div1.innerText = div1.innerText + 1;
}
function Plus5(){
    div1.innerText = div1.innerText + 5;
}
function Plus10(){
    div1.innerText = div1.innerText + 10;
}
function Plus50(){
    div1.innerText = div1.innerText + 50;
}
function Minus1(){
    div1.innerText = div1.innerText - 1;
}
function Minus5(){
    div1.innerText = div1.innerText - 5;
}
function Minus10(){
    div1.innerText = div1.innerText - 10;
}
function Minus50(){
    div1.innerText = div1.innerText - 50;
}
