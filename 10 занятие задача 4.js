function proverka() {
    let div1 = document.getElementById("div1");
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    let input3 = document.getElementById("input3");

    if (input2.value == '+') {
        div1.innerText = Number(input1.value) + Number(input3.value);
    } else if (input2.value == '-'){
        div1.innerText = Number(input1.value) - Number(input3.value);
    } else if (input2.value == '/'){
        div1.innerText = Number(input1.value) / Number(input3.value);
    } else if (input2.value == '*'){
        div1.innerText = Number(input1.value) * Number(input3.value);
    } else {
        div1.innerText = 'Неизвестная операция';
    }
}