let c = 0
let a = []
// console.log(a.length)


function AddElement() {
    let input = document.getElementById('input')
    a.push(input.value)

    if (input.value === '') {
        alert('Введите текст')
    } else {
        if (c === 0) {
            let addElement = document.getElementById('div1')
            let pElement = document.createElement('span')
            addElement.append(pElement)
            pElement.innerText = a[c] + ' '
        } else {
            let addElement = document.getElementById('div1')
            let pElement = document.createElement('span')
            addElement.append(pElement)
            pElement.innerText = a[c] + ' '
        }
        c = c + 1
    }
}

function createListOl(){
    let div2 = document.getElementById('div2');
    let olElement = document.createElement('ol');
    for (let i = 0; i < c; i++) {
        let liElement = document.createElement('li');
        liElement.innerText = a[i];
        olElement.append(liElement)
    }
    div2.append(olElement)
}

function createListUl(){
    let div2 = document.getElementById('div2');
    let ulElement = document.createElement('ul');
    for (let i = 0; i < c; i++) {
        let liElement = document.createElement('li');
        liElement.innerText = a[i];
        ulElement.append(liElement)
    }
    div2.append(ulElement)
}



function clearList() {
    let div2 = document.getElementById('div2');
    let div1 = document.getElementById('div1')
    div2.innerText = ''
    div1.innerText = ''

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