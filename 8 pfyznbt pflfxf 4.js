function ClearAll() {
    let div1 = document.getElementById('red');
    let div2 = document.getElementById('green');
    let div3 = document.getElementById('blue');
    div1.innerText = ''
    div2.innerText = ''
    div3.innerText = ''
}
function AddText1() {
    let div1 = document.getElementById('red');
    let input1 = document.getElementById('input1');
    div1.innerText = div1.innerText + input1.value;
    input1.value = ''
}
function AddText2() {
    let div2 = document.getElementById('green');
    let input1 = document.getElementById('input2');
    div2.innerText = div2.innerText + input2.value;
    input2.value = ''
}
function AddText3() {
    let div3 = document.getElementById('blue');
    let input3 = document.getElementById('input3');
    div3.innerText = div3.innerText + input3.value;
    input3.value = ''
}
