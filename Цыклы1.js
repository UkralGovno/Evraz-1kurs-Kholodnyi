
function addLi1() {
    let addElement = document.getElementById('add')
    let input = document.getElementById('name')
    let liElement = document.createElement('li')

    if (input.value === '') {
        alert('Добваить значение')
    } else {
        liElement.innerText = input.value
        addElement.append(liElement)
        document.getElementById('add').style.color = 'green';

    }

}
function addLi2() {
    let addElement = document.getElementById('add1')
    let input = document.getElementById('name1')
    let liElement = document.createElement('li')

    if (input.value === '') {
        alert('Добваить значение')
    } else {
        liElement.innerText = input.value
        addElement.append(liElement)
        document.getElementById('add1').style.color = 'red';

    }

}
