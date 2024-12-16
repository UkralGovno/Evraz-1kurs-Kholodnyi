let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let div1 = document.getElementById('div1');
let step = 0;
div1.innerText = step;
let c = '';

let block1 = document.getElementById('block1');
let block2 = document.getElementById('block2');
let block3 = document.getElementById('block3');

let upButton = document.querySelector('#up');
let downButton = document.querySelector('#down');
let leftButton = document.querySelector('#left');
let rightButton = document.querySelector('#right');


function makeRed(){
    button1.classList.add('red')
    button1.classList.remove('green');
    button1.classList.remove('blue');
    button2.classList.add('red')
    button2.classList.remove('green');
    button2.classList.remove('blue');
    c = 'red'

}

function makeGreen(){
    button1.classList.add('green')
    button1.classList.remove('red');
    button1.classList.remove('blue');
    button2.classList.add('green')
    button2.classList.remove('red');
    button2.classList.remove('blue');
    c = 'green'
}

function makeBlue(){
    button1.classList.add('blue')
    button1.classList.remove('green');
    button1.classList.remove('red');
    button2.classList.add('blue')
    button2.classList.remove('green');
    button2.classList.remove('red');
    c = 'blue'
}

function Plus1(){
    step = step + 1;
    div1.innerText = step;
}
function Plus5(){
    step = step + 5;
    div1.innerText = step;
}
function Plus10(){
    step = step + 10;
    div1.innerText = step;
}
function Plus50(){
    step = step + 50;
    div1.innerText = step;
}
function Minus1(){
    step = step - 1;
    div1.innerText = step;
}
function Minus5(){
    step = step - 5;
    div1.innerText = step;
}
function Minus10(){
    step = step - 10;
    div1.innerText = step;
}
function Minus50(){
    step = step - 50;
    div1.innerText = step;
}



function BlockLeft(){
    if (c === '') {
        alert('Блок не выбран')
    }
    else if (c === 'red') {
        console.log(block1.style.left, block1.offsetLeft, block1.offsetLeft - step + 'px');
        block1.style.left = block1.offsetLeft - step + 'px';
        //console.log(block1.style.left)
        let left0 = parseInt(block1.style.left)
        while (left0 <= 0) {
            block1.style.left = 0;
            block1.classList.remove('normal');
            block1.classList.add('border_l');
        };
        block1.classList.remove('border_l');
        block1.classList.add('normal');
    }

    else if (c === 'green') {
        console.log(block2.style.left, block2.offsetLeft, block2.offsetLeft - step + 'px');
        block2.style.left = block2.offsetLeft - step + 'px';
        let left0 = parseInt(block2.style.left)
        if (left0 <= 0) {
            block2.style.left = 0;
        };
    }
    else if (c === 'blue') {
        console.log(block3.style.left, block3.offsetLeft, block3.offsetLeft - step + 'px');
        block3.style.left = block3.offsetLeft - step + 'px';
        let left0 = parseInt(block3.style.left)
        if (left0 <= 0) {
            block3.style.left = 0;
        };
    }
}
function BlockRight(){
    if (c === '') {
        alert('Блок не выбран')
    }
    else if (c === 'red') {
        console.log(block1.style.left, block1.offsetLeft, block1.offsetLeft + step + 'px');
        block1.style.left = block1.offsetLeft + step + 'px';
        let right0 = parseInt(block1.style.right)
        if (right0 <= 0) {
            block1.style.right = 0;
        };
    }
    else if (c === 'green') {
        console.log(block2.style.left, block2.offsetLeft, block2.offsetLeft + step + 'px');
        block2.style.left = block2.offsetLeft + step + 'px';
        let right0 = parseInt(block2.style.right)
        if (right0 <= 0) {
            block2.style.right = 0;
        };
    }
    else if (c === 'blue') {
        console.log(block3.style.left, block3.offsetLeft, block3.offsetLeft + step + 'px');
        block3.style.left = block3.offsetLeft + step + 'px';
        let right0 = parseInt(block3.style.right)
        if (right0 <= 0) {
            block3.style.right = 0;
        };
    }
}
function BlockUp(){
    if (c === '') {
        alert('Блок не выбран')
    }
    else if (c === 'red') {
        console.log(block1.style.top, block1.offsetTop, block1.offsetTop - step + 'px');
        block1.style.top = block1.offsetTop - step + 'px';
        let top0 = parseInt(block1.style.top)
        if (top0 <= 0) {
            block1.style.top = 0;
        };
    }
    else if (c === 'green') {
        console.log(block2.style.top, block2.offsetTop, block2.offsetTop - step + 'px');
        block2.style.top = block2.offsetTop - step + 'px';
        let top0 = parseInt(block2.style.top)
        if (top0 <= 0) {
            block2.style.top = 0;
        };
    }
    else if (c === 'blue') {
        console.log(block3.style.top, block3.offsetTop, block3.offsetTop - step + 'px');
        block3.style.top = block3.offsetTop - step + 'px';
        let top0 = parseInt(block3.style.top)
        if (top0 <= 0) {
            block3.style.top = 0;
        };
    }
}
function BlockDown(){
    if (c === '') {
        alert('Блок не выбран')
    }
    else if (c === 'red') {
        console.log(block1.style.top, block1.offsetTop, block1.offsetTop + step + 'px');
        block1.style.top = block1.offsetTop + step + 'px';
        let bottom0 = parseInt(block1.style.bottom)
        if (bottom0 <= 0) {
            block1.style.bottom =  0;
        };
    }
    else if (c === 'green') {
        console.log(block2.style.top, block2.offsetTop, block2.offsetTop + step + 'px');
        block2.style.top = block2.offsetTop + step + 'px';
        let bottom0 = parseInt(block2.style.bottom)
        if (bottom0 <= 0) {
            block1.style.bottom = 0;
        };
    }
    else if (c === 'blue') {
        console.log(block3.style.top, block3.offsetTop, block3.offsetTop + step + 'px');
        block3.style.top = block3.offsetTop + step + 'px';
        let bottom0 = parseInt(block3.style.bottom)
        if (bottom0 <= 0) {
            block1.style.bottom = 0;
        };
    }
}


