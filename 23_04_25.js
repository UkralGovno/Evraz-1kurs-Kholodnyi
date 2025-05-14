function function1() {
    let input1 = document.getElementById('input1').value
    let input2 = document.getElementById('input2').value
    let input3 = document.getElementById('input3').value

    let boiler = document.getElementById('span1')
    let room1_i = document.getElementById('span2')
    let room2_i = document.getElementById('span3')

    let procent1 = document.getElementById('span_p1')
    let procent2 = document.getElementById('span_p2')

    boiler.innerText = input1
    room1_i.innerText = input2
    room2_i.innerText = input3


    let span7 = document.getElementById('span7')
    span7.innerText = boiler.innerText
    let span6 = document.getElementById('span6')
    if (boiler.innerText === '--') {
        alert('123')
    } else if (Number(room1_i.innerText) < 0) {
        alert('Процент дольжен быть больше нуля')
    } else if (Number(room1_i.innerText) > 100) {
        alert('Процент дольжен быть меньше ста')
    } else if (Number(room2_i.innerText) < 0) {
        alert('Процент дольжен быть больше нуля')
    } else if (Number(room2_i.innerText) > 100) {
        alert('Процент дольжен быть меньше ста')
    } else {
        function function2() {
            let number1 = 0

            const minTemp = 20

            number1 = Number(boiler.innerText) - minTemp

            room1_i.innerText = (Number(room1_i.innerText) * Number(number1) * 0.01 * 0.9) + minTemp
            room2_i.innerText = (Number(room2_i.innerText) * Number(number1) * 0.01 * 0.8) + minTemp
            let tempRoom1 = Number(span2.innerText)
            let tempRoom2 = Number(span3.innerText)
            span6.innerText = (tempRoom1 + tempRoom2) / 2

        }

        function2()
        procent1.innerText = input2
        procent2.innerText = input3

    }


}

