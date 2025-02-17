let a = []

function AddToList() {
    let input = document.getElementById('input')
    let ol = document.getElementById('ol')
    a.push(input.value)
    let liElement = document.createElement('li');
    liElement.innerText = input.value;
    ol.append(liElement)
}

function ChangeElement () {
    let input1 = document.getElementById('input1')
    let input2 = document.getElementById('input2')
    let ol = document.getElementById('ol')


        a[input1] = input2.value
        ol.children[input1].innerText = input2.value

}