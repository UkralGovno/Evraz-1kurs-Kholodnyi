


function AddDiv1(){
    let addElement = document.getElementById('add')
    let divElement = document.createElement('div')
    divElement.classList.add('red')
    addElement.append(divElement)


}
function AddDiv2(){
    let addElement = document.getElementById('add')
    let divElement = document.createElement('div')
    divElement.classList.add('green')
    addElement.append(divElement)


}
function AddDiv3(){
    let addElement = document.getElementById('add')
    let divElement = document.createElement('div')
    divElement.classList.add('blue')
    addElement.append(divElement)


}



function MakePrompt () {
    let a = 0;

    while (a !== '4') {
        a = prompt('1-Красный 2-Зеленый 3-Синий 4-Стоп')
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