const get = document.getElementById.bind(document);
const create = document.createElement.bind(document);
const _eventHandler = {};
const _message = get('his-message-p');
const _list = get('history-list');
//================================ History API ===========================
export default { render, addEventListener };

//=========================== Define keyboard function ===================

function addEventListener(option, callBack) {
    _eventHandler[option] = callBack;
}

function render(historys) {
    _list.innerHTML = ' ';
    _message.innerHTML = '';
    historys.forEach(element => _list.prepend(creatItem(element)));
}

function renderSingleItem(element) {
    _list.prepend(creatItem(element))
}

function creatItem(element) {
    const divTag1 = create('div');
    const divTag2 = create('div');
    const li = create('li');
    let context1 = '';
    let context2 = '';

    context1 = element.first_number + ' ' + element.second_sign + ' ' + element.second_number + ' = ';
    divTag1.innerHTML = context1;
    divTag1.classList.add('history-item-expression')
    li.appendChild(divTag1);

    context2 = element.final_result;
    divTag2.innerHTML = context2;
    divTag2.classList.add('history-item-result')
    li.appendChild(divTag2);



    return li;
}