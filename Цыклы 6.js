let a = []

function AddToList() {
    let input = document.getElementById('input')
    let ol = document.getElementById('ol')
    a.push(input.value)
    let liElement = document.createElement('li');
    liElement.innerText = input.value;
    ol.append(liElement)
}

function chooseElement() {
    let input1 = document.getElementById("input1")
    let ul = document.getElementById('ul')

    if (input1.value === '') {
        alert('Ничего не введено')
    } else if (a.length === 0) {
        alert('Список пуст')
    } else {
        let liElement = document.createElement('li');
        liElement.innerText = a[input1.value];
        ul.append(liElement)
    }

}