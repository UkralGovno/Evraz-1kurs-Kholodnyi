let listDOM = document.getElementById('list');
let inputName = document.getElementById('name');
let selectCategory = document.getElementById('category');
let selectColor = document.getElementById('color');
let inputPrice = document.getElementById('price');
let inputCount = document.getElementById('count');
let inputDiscount = document.getElementById('discount');
let inputDescription = document.getElementById('description');
let inputPunktvidachi = document.getElementById('punktvidachi');
let form = document.getElementById('form');
let buttonAdd = document.getElementById('button-add');
let buttonEdit = document.getElementById('button-edit');
let titleAdd = document.getElementById('title-add')
let titleEdit = document.getElementById('title-edit')

let products = [];

// переменная для хранения индекса редактируемого товара
let currentEditProduct = null;

let categories = {
    'clothes': 'Одежда',
    'shoes':   'Обувь',
    'tools':   'Инструменты',
};

let colors = {
    'c_red': 'Красный',
    'c_green':   'Зелёный',
    'c_blue':   'Синий',
};

let specialsObj = {
    'bu':      'Б/У',
    'fragile': 'Хрупкое',
};

function discount2(item) {
    let field = document.getElementById('discountDom');

    if (item) {
        // чтобы перебить ранее написанный стиль с !important
        field.style.setProperty('display', 'flex', 'important');
    }
    else {
        // чтобы перебить ранее написанный стиль с !important
        field.style.setProperty('display', 'none', 'important');
    }
}

function addTovar() {
    // находим активный радио-инпут, который выбран
    let discountChoose = document.querySelector('input[name=discount]:checked');
    let inputSposoboplati = document.querySelector('input[name=sposoboplati]:checked');


    let specialsValues = [];
    let specials = document.querySelectorAll('input[name=specials]:checked');

    for (let i = 0; i < specials.length; i++) {
        specialsValues.push(specials[i].value);
    }

    let product = {
        name:           inputName.value,
        category:       selectCategory.value,
        color:          selectColor.value,
        specials:       specialsValues,
        description:    inputDescription.value,
        punktvidachi:   inputPunktvidachi.value,
        discountChoose: discountChoose.value,
        discount:       inputDiscount.value,
        price:          inputPrice.value,
        count:          inputCount.value,
        sposoboplati:   inputSposoboplati.value,
    };
    let productIndex = products.push(product) - 1;

    addTovarCard(product, productIndex)
}

function addTovarCard(tovar, index) {
    // создаем контейнер для товара
    let cardTovar = document.createElement('div');
    cardTovar.classList.add('tovar');

    // создаем html наполнение для блока с ценой
    let price = ``;

    // проверим, а есть ли в discountChoose.value значение
    if (tovar.discountChoose === 'true') {
        // inputDiscount
        let disc = +tovar.price * +tovar.discount / 100;
        let newPrice = +tovar.price - disc;
        price = `<div class="tovar-price">
                    <div>Цена: </div>
                    <div>
                        <div class="tovar-price-old">${ tovar.price } руб.</div>
                        <div>${ newPrice } руб.</div>
                    </div>
                </div>`;
    }
    else {
        price = `<div class="tovar-price">Цена: ${ tovar.price } руб.</div>`;
    }

    // достаем все чекбоксы особенностей и генерируем текст
    let specialsText = '';

    for (let i = 0; i < tovar.specials.length; i++) {
        specialsText += ' ' + specialsObj[tovar.specials[i]];
    }

    let card = `<div class="tovar-name">${ tovar.name }</div>
            <div class="tovar-category">${ categories[tovar.category] }</div>
            <div>Цвет: ${ colors[tovar.color] }</div>
            <div class="tovar-specials">Особенности: ${ specialsText }</div>
            <div class="tovar-description">${ tovar.description }</div>
            <div class="tovar-price-count">
                ${ price }
                <div class="count">Количество: ${ tovar.count } шт.</div>
            </div>
            <div class="">Спооб оплаты: ${ tovar.sposoboplati }</div>
            <div class="tovar-punktvidachi">Пункт выдачи: ${ tovar.punktvidachi }</div>
            <div class="tovar-close" onclick="clearList()">X</div>
            <div class="tovar-edit">
                <button onclick="edit(${ index })">Редактировать</button>
            </div>`;

    cardTovar.innerHTML = card;
    listDOM.append(cardTovar);


    form.reset();
}

// редактирование товара, открытие свойств товара в форме товара
function edit(productIndex) {
    currentEditProduct = productIndex;

    buttonAdd.classList.add('hide');
    buttonEdit.classList.remove('hide');
    titleAdd.classList.add('hide');
    titleEdit.classList.remove('hide');

    let product = products[productIndex];
    inputName.value = product.name;
    inputPrice.value = product.price;
    inputCount.value = product.count;
    inputDescription.value = product.description;
    inputPunktvidachi.value = product.punktvidachi;
    selectCategory.value = product.category;
    selectColor.value = product.color;
    inputSposoboplati.value = product.sposoboplati;

    // ищем нужный инпут радио с нужным value значением, чтобы его отметить как выбранный
    let radio = document.querySelector(`input[name=discount][value=${ product.discountChoose }]`);
    if (radio) {
        radio.checked = true;
    }

    for (let i = 0; i < product.specials.length; i++) {
        // ищем нужный инпут чекбокс с нужным value значением, чтобы его отметить как выбранный
        let specialValue = product.specials[i];
        let checkbox = document.querySelector(`input[name=specials][value=${ specialValue }]`);
        if (checkbox) {
            checkbox.checked = true;
        }
    }

    let radio1 = document.querySelector(`input[name=sposoboplati][value=${ product.sposoboplati }]`);
    if (radio1) {
        radio1.checked = true;
    }

    for (let i = 0; i < product.specials.length; i++) {
        // ищем нужный инпут чекбокс с нужным value значением, чтобы его отметить как выбранный
        let specialValue1 = product.specials[i];
        let checkbox1 = document.querySelector(`input[name=sposoboplati][value=${ specialValue1 }]`);
        if (checkbox1) {
            checkbox1.checked = true;
        }
    }
}



// обновление товара в массиве товаров после его редактирования
function editTovar() {
    event.preventDefault();
    buttonAdd.classList.remove('hide');
    buttonEdit.classList.add('hide');
    titleAdd.classList.remove('hide');
    titleEdit.classList.add('hide');

    let product = products[currentEditProduct];
    currentEditProduct = null;

    // находим активный радио-инпут, который выбран
    let discountChoose = document.querySelector('input[name=discount]:checked');
    let sposoboplatiChoose= document.querySelector('input[name=sposoboplati]:checked');

    // достаем все чекбоксы особенностей и генерируем текст
    let specialsValues = [];
    let specials = document.querySelectorAll('input[name=specials]:checked');

    for (let i = 0; i < specials.length; i++) {
        specialsValues.push(specials[i].value);
    }

    product.name = inputName.value;
    product.category = selectCategory.value;
    product.color = selectColor.value;
    product.specials = specialsValues;
    product.description = inputDescription.value;
    product.punktvidachi = inputPunktvidachi.value;
    product.discountChoose = discountChoose.value;
    product.discount = inputDiscount.value;
    product.price = inputPrice.value;
    product.count = inputCount.value;
    product.sposoboplati = sposoboplatiChoose.value;


    event.preventDefault();
    form.reset();

    buildAgain();
}

// полностью очищаем список продуктов и строим его заново, вызывая функцию построения карточки товара
function buildAgain() {
    listDOM.innerText = '';

    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        addTovarCard(product, i)
    }
}

function clearList (productIndex) {

    listDOM.innerText = '';

    for (let i = 0; i < products.length; i++) {
        let product = '';
        addTovarCard(product, i)
    }

    buildAgain();
}
