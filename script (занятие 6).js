
let nameDOM = document.getElementById('name');
let name = prompt('Имя');

nameDOM.innerText = name;

let lastnameDOM = document.getElementById('lastname');
let lastname = prompt('Фамилия');

lastnameDOM.innerText = lastname;

let ageDOM = document.getElementById('age');
let age = prompt('Возрост');

ageDOM.innerText = age;

let schoolDOM = document.getElementById('school');
let school = prompt('Школа');

schoolDOM.innerText = school;

let class1DOM = document.getElementById('class1');
let class1 = prompt('Класс');

class1DOM.innerText = class1;

let sportDOM = document.getElementById('sport');
let sport = prompt('Любимый спорт');

sportDOM.innerText = sport;

let subjectDOM = document.getElementById('subject');
let subject = prompt('Любимый предмет');

subjectDOM.innerText = subject;


let colorDOM = document.getElementById('color');
let color = prompt('Любимый цвет');

document.getElementById('body').style = 'background-color: ' + color;

colorDOM.innerText = subject;


const button = document.getElementById('clear');
const clear = () => {
    nameDOM.innerText = '';
    lastnameDOM.innerText = '';
    ageDOM.innerText = '';
    schoolDOM.innerText = '';
    class1DOM.innerText = '';
    sportDOM.innerText = '';
    subjectDOM.innerText = '';
    colorDOM.innerText = '';
    document.getElementById('body').style = 'background-color: white';
};
button.addEventListener('click', clear);




