
function proverka() {
    let div1 = document.getElementById("div1");
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    if (input1.value > input2.value) {
        div1.innerText = 'Первое число больше';
        div3.style.backgroundColor = 'white';
        div2.style.backgroundColor = 'green';
        input2.style.backgroundColor = 'white';
        input1.style.backgroundColor = 'green';


    } else if (input1.value < input2.value) {
        div1.innerText = 'Второе число больше';
        div2.style.backgroundColor = 'white';
        div3.style.backgroundColor = 'green';
        input2.style.backgroundColor = 'green';
        input1.style.backgroundColor = 'white';

    } else {
        div1.innerText = 'Числа равны';
        div2.style.backgroundColor = 'white';
        div3.style.backgroundColor = 'white';
        input2.style.backgroundColor = 'white';
        input1.style.backgroundColor = 'white';
    }
}