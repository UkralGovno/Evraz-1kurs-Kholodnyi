let a = []

function AddToList() {

    let input = document.getElementById('input')
    let ol = document.getElementById('ol')
    if (input.value === '') {
        alert('Значение не задано')
    } else {
        a.push(input.value)
        let liElement = document.createElement('li');
        liElement.innerText = input.value;
        ol.append(liElement)
    }
}

function ChangeElement () {
    let input1 = document.getElementById('input1')
    let input2 = document.getElementById('input2')
    let ol = document.getElementById('ol')

    a[input1.value] = input2.value
    ol.innerText = ''


    for (let i = 0; i < a.length; i++) {
        let liElement = document.createElement('li')
        liElement.innerText = a[i]
        ol.append(liElement)
    }
}