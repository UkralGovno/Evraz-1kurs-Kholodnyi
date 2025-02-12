function create5_0() {
    let div1 = document.getElementById('div1')
    div1.innerText = '0 1 2 3 4'
}
function create5_1() {
    let div2 = document.getElementById('div2')
    div2.innerText = '1 2 3 4 5'
}

function create10_0() {
    let div3 = document.getElementById('div3')
    div3.innerText = '0 1 2 3 4 5 6 7 8 9'
}
function create10_1() {
    let div4 = document.getElementById('div4')
    div4.innerText = '1 2 3 4 5 6 7 8 9 10'
}
function create10_0_2() {
    let div5 = document.getElementById('div5')
    div5.innerText = '0 2 4 6 8 10 12 14 16 18'
}
function create10_1_2() {
    let div6 = document.getElementById('div6')
    div6.innerText = '1 3 5 7 9 11 13 15 17 19'
}
function create20_1() {
    let div7 = document.getElementById('div7')
    for (let i = 0; i < 20; i++) {
        let pElement = document.createElement('span');
        pElement.innerText = i + ' '
        if (i % 2 === 0) {
            pElement.style.color = 'red'
        }
        div7.append(pElement)
    }
}
