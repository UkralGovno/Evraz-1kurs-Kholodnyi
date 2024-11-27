function ClearAll() {
    let div1 = document.getElementById('div1');
    let div2 = document.getElementById('div2');
    let div3 = document.getElementById('div3');
    div1.innerText = ''
    div2.innerText = ''
    div3.innerText = ''
}

function AddTextF1() {
    let div1 = document.getElementById('div1');
    let input1 = document.getElementById('input1');
    div1.innerText = div1.innerText + input1.value;
    input1.value = ''
}
function AddTextF2() {
    let div2 = document.getElementById('div2');
    let input2 = document.getElementById('input2');
    div2.innerText = div1.innerText + input2.value;
    input2.value = ''
}
function AddTextF3() {
    let div3 = document.getElementById('div3');
    let input3 = document.getElementById('input3');
    div3.innerText = div1.innerText + input3.value;
    input3.value = ''
}
