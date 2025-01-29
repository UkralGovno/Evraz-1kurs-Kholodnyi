
function addLi1() {
    let addElement = document.getElementById('add')
    let input = document.getElementById('name')

    let name2 = document.getElementById('name2')

    if (input.value === '') {
        alert('Добваить значение')
    } else {
        for (i = 0; i < Number(name2.value); i++) {
            let liElement = document.createElement('li')
            liElement.innerText = input.value
            addElement.append(liElement)
            document.getElementById('add').style.color = 'green';
        }

    }

}
function addLi2() {
    let addElement = document.getElementById('add1')
    let input = document.getElementById('name1')

    let name3 = document.getElementById('name3')

    if (input.value === '') {
        alert('Добваить значение')
    } else {
        for (i = 0; i < Number(name3.value); i++) {
            let liElement = document.createElement('li')
            liElement.innerText = input.value
            addElement.append(liElement)
            document.getElementById('add1').style.color = 'red';
        }

    }

}
