let a1 = 9;

if (a1 % 2 == 0) {

}
else {

}
function makeBlack(){
    document.getElementById('body').style.backgroundColor = 'black';
    document.getElementById('body').style.color = 'white';
}
function makeWhite(){
    document.getElementById('body').style.backgroundColor = 'white';
    document.getElementById('body').style.color = 'black';
}
function makeBlue(){
    document.getElementById('body').style.backgroundColor = 'blue';
    document.getElementById('body').style.color = 'white';
}
function makeGreen(){
    document.getElementById('body').style.backgroundColor = 'green';
    document.getElementById('body').style.color = 'white';
}
function makeRed(){
    document.getElementById('body').style.backgroundColor = 'red';
    document.getElementById('body').style.color = 'white';
}
function makeYellow(){
    document.getElementById('body').style.backgroundColor = 'gold';
    document.getElementById('body').style.color = 'black';
}
function makeZero(){
    let div2 = document.getElementById('div2');
    div2.innerHTML = 0;
}
function makeOne(){
    let div2 = document.getElementById('div2');
    div2.innerHTML = 1;
}
function makeTwo(){
    let div2 = document.getElementById('div2');
    div2.innerHTML = 2;
}
function makeFive(){
    let div2 = document.getElementById('div2');
    div2.innerHTML = 5;
}
function makeNmbPlusOne(){
    let div2 = document.getElementById('div2');
    div2.innerHTML = div2.innerText + 1;
}
function makeNmbMinusOne(){
    let div2 = document.getElementById('div2');
    div2.innerHTML = div2.innerText - 1;
}
