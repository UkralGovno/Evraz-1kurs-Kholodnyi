// let div = document.getElementById('div')
// console.log(div.innerText)
// div.innerText = '123'
// console.log(div.innerText)
//
// let input = document.getElementById('input')
// console.log(input.innerText)
// input.value = '16'
// console.log(input.value)

function result() {
    let s1 = document.getElementById('s1');

    let s2 = document.getElementById('s2');
    let result = Number(s1.value) + Number(s2.value);
    let res = document.getElementById('res');
    res.innerText = result;
}

