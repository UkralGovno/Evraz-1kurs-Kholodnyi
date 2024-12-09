let div1 = document.getElementById('div2');
let div2 = 0;


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
    div2 = 0;
    Sravneniye()
}
function makeOne(){
    div2 = 1;
    Sravneniye()
}
function makeTwo(){
    div2 = 2;
    Sravneniye()
}
function makeFive(){
    div2 = 5;
    Sravneniye()
}
function makeNmbPlusOne(){
    div2 = div2 + 1;
    Sravneniye()
}
function makeNmbMinusOne(){
    div2 = div2 - 1;
    Sravneniye()
}


function Sravneniye() {
    if (div2 == 0) {
        makeBlack()
    } else if (div2 == 1) {
        makeWhite()
    } else if (div2 == 2) {
        makeBlue()
    } else if (div2 == 5) {
        makeGreen()
    } else if (div2 % 2 == 0) {
        makeRed()
    } else {
        makeYellow()
    }
    div1.innerText = div2
}

