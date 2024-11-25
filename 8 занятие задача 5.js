
let div1 = document.getElementById('red');
let div2 = document.getElementById('green');
let div3 = document.getElementById('blue');

function ClearAll() {
    div1.innerText = ''
    div2.innerText = ''
    div3.innerText = ''
}

function AddText() {
    let input = document.getElementById('input');
    let Alerttext1 = prompt('В какой блок положить текст (1, 2, 3)');

    if (Alerttext1 === '1') {
        div1.innerText = div1.innerText + input.value;
        input.value = ''}
    else if (Alerttext1 === '2') {
        div2.innerText = div2.innerText + input.value;
        input.value = ''}
    else if (Alerttext1 === '3') {
        div3.innerText = div3.innerText + input.value;
        input.value = ''}
}

function combine() {
    let div4 = document.getElementById('div4');
    div4.innerText = div1.innerText + ' | ' + div2.innerText + ' | ' + div3.innerText;
}