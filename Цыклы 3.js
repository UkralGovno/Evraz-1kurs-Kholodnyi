


function AddDiv1(){
    let addElement = document.getElementById('add')
    let divElement = document.createElement('div')
    addElement.append(divElement)

    document.getElementById('add').classList.add = 'red'

    document.getElementsByClassName('red').style.backgroundColor = 'red';

}
function AddDiv2(){
    let addElement = document.getElementById('add')
    let divElement = document.createElement('div')
    addElement.append(divElement)

    document.getElementById('add').classList.add = 'green'

    document.getElementsByClassName('green').style.backgroundColor = 'green';

}


function MakePrompt () {
    let a = prompt('1-Красный 2-Зеленый 3-Синий 4-Стоп')

    while (a === '4') {
        if (a === '1') {
            AddDiv1()
        } else if (a === '2') {
            AddDiv2()
        } else if (a === '3') {
            AddDiv3()
        } else {
            alert('Значение не задано')
        }
    }

}

MakePrompt()