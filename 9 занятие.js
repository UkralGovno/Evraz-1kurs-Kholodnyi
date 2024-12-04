let div2 = document.getElementById('div2');


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
    Sravneniye()
}
function makeOne(){
    let div2 = document.getElementById('div2');
    div2.innerHTML = 1;
    Sravneniye()
}
function makeTwo(){
    let div2 = document.getElementById('div2');
    div2.innerHTML = 2;
    Sravneniye()
}
function makeFive(){
    let div2 = document.getElementById('div2');
    div2.innerHTML = 5;
    Sravneniye()
}
function makeNmbPlusOne(){
    let div2 = document.getElementById('div2');
    div2.innerHTML = Number(div2.innerText) + 1;
    Sravneniye()
}
function makeNmbMinusOne(){
    let div2 = document.getElementById('div2');
    div2.innerHTML = Number(div2.innerText) - 1;
    Sravneniye()
}

function Sravneniye() {
    if (div2.innerText == 0) {
        makeBlack()
    } else if (div2.innerText == 1) {
        makeWhite()
    } else if (div2.innerText == 5) {
        makeGreen()
    } else if (div2.innerText % 2 == 0) {
        makeRed()
    } else {
        makeYellow()
    }

}
