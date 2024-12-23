
let body = document.getElementById('body');
let div1 = document.getElementById('div1')
let c = 0

let div_n1 = document.getElementById('div_n1')
let div_n2 = document.getElementById('div_n2')
let div_n3 = document.getElementById('div_n3')
let div_n4 = document.getElementById('div_n4')

let div_b1 = document.getElementById('div_b1')
let div_b2 = document.getElementById('div_b2')
let div_b3 = document.getElementById('div_b3')
let div_b4 = document.getElementById('div_b4')
let div_b5 = document.getElementById('div_b5')


function makeWhite(){
    body.style.color = 'black';
    body.style.backgroundColor = 'white';
    div_b1.style.backgroundColor = 'white'
    div_b2.style.backgroundColor = 'white'
    div_b3.style.backgroundColor = 'white'
    div_b4.style.backgroundColor = 'white'
    div_b5.style.backgroundColor = 'white'
    div_b1.style.color = 'black'
    div_b2.style.color = 'black'
    div_b3.style.color = 'black'
    div_b4.style.color = 'black'
    div_b5.style.color = 'black'
}
function makeBlack(){
    body.style.color = 'white';
    body.style.backgroundColor = 'black';
    div_b1.style.backgroundColor = 'gray'
    div_b2.style.backgroundColor = 'gray'
    div_b3.style.backgroundColor = 'gray'
    div_b4.style.backgroundColor = 'gray'
    div_b5.style.backgroundColor = 'gray'
    div_b1.style.color = 'black'
    div_b2.style.color = 'black'
    div_b3.style.color = 'black'
    div_b4.style.color = 'black'
    div_b5.style.color = 'black'
}
function makeGray(){
    body.style.color = 'white';
    body.style.backgroundColor = 'gray';
    div_b1.style.backgroundColor = 'black'
    div_b2.style.backgroundColor = 'black'
    div_b3.style.backgroundColor = 'black'
    div_b4.style.backgroundColor = 'black'
    div_b5.style.backgroundColor = 'black'
    div_b1.style.color = 'white'
    div_b2.style.color = 'white'
    div_b3.style.color = 'white'
    div_b4.style.color = 'white'
    div_b5.style.color = 'white'
}
function makeGold(){
    body.style.color = 'black';
    body.style.backgroundColor = 'gold';
    div_b1.style.backgroundColor = 'blue'
    div_b2.style.backgroundColor = 'blue'
    div_b3.style.backgroundColor = 'blue'
    div_b4.style.backgroundColor = 'blue'
    div_b5.style.backgroundColor = 'blue'
    div_b1.style.color = 'gold'
    div_b2.style.color = 'gold'
    div_b3.style.color = 'gold'
    div_b4.style.color = 'gold'
    div_b5.style.color = 'gold'
}
function makeBlue(){
    body.style.color = 'gold';
    body.style.backgroundColor = 'blue';
    div_b1.style.backgroundColor = 'gold'
    div_b2.style.backgroundColor = 'gold'
    div_b3.style.backgroundColor = 'gold'
    div_b4.style.backgroundColor = 'gold'
    div_b5.style.backgroundColor = 'gold'
    div_b1.style.color = 'blue'
    div_b2.style.color = 'blue'
    div_b3.style.color = 'blue'
    div_b4.style.color = 'blue'
    div_b5.style.color = 'blue'
}

function Plus10() {
    c = c + 10
    div1.innerText = c
}
function Plus1() {
    c = c + 1
    div1.innerText = c
}
function Minus1() {
    c = c - 1
    div1.innerText = c
}
function Minus10() {
    c = c - 10
    div1.innerText = c


}
function ChangeNumber() {
    let n = prompt()
    c = n
    div1.innerText = c
}


function History() {
    if (c % 2 == 1) {
        div_n1.innerText = 'Нет'
    }
    if (c % 3 == 0) {
        div_n2.innerText = 'Да'
    } else {
        div_n2.innerText = 'Нет'
    }
    if (c % 5 == 0) {
        div_n3.innerText = 'Да'
    } else {
        div_n3.innerText = 'Нет'
    }
    if (c % 7 == 0) {
        div_n4.innerText = 'Да'
    } else {
        div_n4.innerText = 'Нет'
    }

    if (c % 2 == 0){
        let div2 = document.getElementById('div2');
        div2.innerText = div2.innerText + ' ' + c;
        div_n1.innerText = 'Да'
        if (c % 3 == 0){
            let div3 = document.getElementById('div3');
            div3.innerText = div3.innerText + ' ' + c;

        }
        else if (c % 5 == 0){
            let div4 = document.getElementById('div4');
            div4.innerText = div4.innerText + ' ' + c;
        }
        else if (c % 7 == 0){
            let div5 = document.getElementById('div5');
            div5.innerText = div5.innerText + ' ' + c;

        }

    }
    else if (c % 3 == 0){
        let div3 = document.getElementById('div3');
        div3.innerText = div3.innerText + ' ' + c;
        if (c % 5 == 0){
            let div4 = document.getElementById('div4');
            div4.innerText = div4.innerText + ' ' + c;
        }
        else if (c % 7 == 0){
            let div5 = document.getElementById('div5');
            div5.innerText = div5.innerText + ' ' + c;

        }
    }
    else if (c % 5 == 0){
        let div4 = document.getElementById('div4');
        div4.innerText = div4.innerText + ' ' + c;
    }
    else if (c % 7 == 0){
        let div5 = document.getElementById('div5');
        div5.innerText = div5.innerText + ' ' + c;

    }
    else {
        let div6 = document.getElementById('div6');
        div6.innerText = div6.innerText + ' ' + c;
        console.log(c);
        console.log(div6);
    }


}