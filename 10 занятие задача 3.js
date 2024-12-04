
function proverka() {
    let div1 = document.getElementById("div1");
    let input1 = document.getElementById("input1");
    if (input1.value == 'Павел Дуров') {
        div1.innerText = 'Паша Дуров оснавал вк, тг, и ещё много вего. Верни стену';
    } else if (input1.value == 'Илон Маск'){
        div1.innerText = 'Теслу сделал, спейсикс запустил';
    } else {
        div1.innerText = 'Нету такого человека';
    }
}