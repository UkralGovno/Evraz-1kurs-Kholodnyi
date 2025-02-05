let i = 0

function AddElement(){
    let input = document.getElementById('input')

    if (i === 0) {
        let addElement = document.getElementById('div1')
        let pElement = document.createElement('p')
        addElement.append(pElement)
        pElement = input.value
        i = i + 1
    } else {
        let addElement = document.getElementById('div1')
        let pElement = document.createElement('p')
        addElement.append(pElement)
        pElement = ', ' + input.value
    }





}

