let i = 0

function AddElement() {
    let input = document.getElementById('input')
    let div1 = document.getElementById('div1');

    if (input.value === '') {
        alert('Введите текст')
    } else {
        if (i === 0) {
            let addElement = document.getElementById('div1')
            let pElement = document.createElement('p')
            addElement.append(pElement)
            pElement.innerText = input.value
            i = i + 1
        } else {
            let addElement = document.getElementById('div1')
            let pElement = document.createElement('p')
            addElement.append(pElement)
            pElement.innerText = ', ' + input.value
        }
    }
}

function createListOl(){
    let div2 = document.getElementById('div2');
    for (let i = 0; i < ; i++) {

        let olElement = document.createElement('ol');


        let liElement = document.createElement('li');
        liElement.innerText = div1.innerText;
    }

}


function clearList() {
    let div2 = document.getElementById('div2');
    div2.innerText = ''
}


// // Функция для создания нумерованного списка
// function createNumberedList() {
//     const div2 = document.getElementById('div2');
//     const olElement = document.createElement('ol');
//
//     // Добавляем каждый элемент из массива в нумерованный список
//     elements.forEach(element => {
//         const liElement = document.createElement('li');
//         liElement.textContent = element;
//         olElement.appendChild(liElement);
//     });
//
//     // Очищаем div2 и добавляем в него новый список
//     div2.innerHTML = '';
//     div2.appendChild(olElement);
// }
//
// // Функция для создания маркированного списка
// function createBulletedList() {
//     const div2 = document.getElementById('div2');
//     const ulElement = document.createElement('ul');
//
//     // Добавляем каждый элемент из массива в маркированный список
//     elements.forEach(element => {
//         const liElement = document.createElement('li');
//         liElement.textContent = element;
//         ulElement.appendChild(liElement);
//     });
//
//     // Очищаем div2 и добавляем в него новый список
//     div2.innerHTML = '';
//     div2.appendChild(ulElement);
// }