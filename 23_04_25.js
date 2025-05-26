let div_a = document.getElementById('div_a')
let div_a1 = document.getElementById('div_a1')
let div_a2 = document.getElementById('div_a2')
let div_a3 = document.getElementById('div_a3')

let Animate = document.getElementById('Animate')

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

Animate.onclick = async function() {
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


        for (let i = 0; i < Infinity; i += 1) {
            div_a.style.marginLeft = '598px';
            await wait(2000)
            div_a.style.marginTop = '178px';
            await wait(2000)
            div_a.style.marginLeft = '891px';
            await wait(2000)
            div_a.style.display = 'none';
            div_a1.style.display = 'block';
            await wait(50)
            div_a1.style.marginTop = '48px';
            div_a2.style.display = 'block';
            await wait(50)
            div_a2.style.marginLeft = '1008px';
            await wait(2000)
            div_a1.style.marginLeft = '388px';
            div_a2.style.marginTop = '48px';
            await wait(2000)
            div_a2.style.marginLeft = '1510px';
            div_a1.style.marginTop = '273px';
            await wait(2000)
            div_a2.style.marginTop = '273px';
            await wait(500)
            div_a1.style.backgroundColor = 'blue';
            div_a2.style.backgroundColor = 'blue';
            await wait(2000)
            div_a1.style.marginLeft = '891px';
            div_a2.style.marginLeft = '1008px';
            await wait(2000)
            div_a1.style.marginTop = '326px';
            div_a2.style.marginTop = '326px';
            await wait(2000)
            div_a1.style.marginLeft = '1008px';
            await wait(2000)
            div_a1.style.display = 'none';
            div_a2.style.display = 'none';
            await wait(50)
            div_a3.style.display = 'block';
            await wait(50)
            div_a3.style.marginLeft = '1241px';
            await wait(2000)
            div_a3.style.marginTop = '631px';
            await wait(2000)
            div_a3.style.marginLeft = '896px';
            await wait(2000)

            div_a.style.display = 'none'
            await wait(50)
            div_a.style.marginLeft = '885px'
            div_a.style.marginTop = '631px'
            await wait(50)

            div_a1.style.display = 'none'
            await wait(50)
            div_a1.style.marginLeft = '891px'
            div_a1.style.marginTop = '178px'

            div_a2.style.display = 'none'
            await wait(50)
            div_a2.style.marginLeft = '891px'
            div_a2.style.marginTop = '178px'

            div_a3.style.display = 'none'
            await wait(50)
            div_a3.style.marginLeft = '1008px'
            div_a3.style.marginTop = '326px'

            div_a.style.display = 'block'
            await wait(50)

            div_a.style.backgroundColor = 'red'
            div_a1.style.backgroundColor = 'red'
            div_a2.style.backgroundColor = 'red'
            await wait(50)
        }
    }
}
