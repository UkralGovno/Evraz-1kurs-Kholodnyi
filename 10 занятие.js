
function proverka() {
    let div1 = document.getElementById("div1");
    let input1 = document.getElementById("input1");
    if (input1.value % 2 == 1) {
        div1.innerText = 'Результат проверки числа - число нечётное';
    } else {
        div1.innerText = 'Результат проверки числа - число чётное';
    }
}