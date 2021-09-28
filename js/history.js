const get = document.getElementById.bind(document);
const create = document.createElement.bind(document);
const _eventHandler = {};
const _message = get('history-msg-p');
const _list = get('history-msg-list');
const _trash = get('history-trash-img');
const _history = get('history-memory-p1');
const _memory = get('history-memory-p2');
//================================ History API ===========================
export default { render, addEventListener, showMessage };

//=========================== Keyboard event listener ====================
_trash.addEventListener('click', (e) => {
    e.preventDefault();
    _eventHandler.trash('navid')
})

_history.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('history')
})

_memory.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('memory')
})

//=========================== Define keyboard function ===================

function addEventListener(option, callBack) {
    _eventHandler[option] = callBack;
}

function render(historys) {
    _list.innerHTML = ' ';
    _message.innerHTML = '';
    _trash.style.display = 'flex';
    historys.forEach(element => _list.prepend(creatItem(element)));
}

function showMessage() {
    _message.innerHTML = 'There\'s no history yet';
    _trash.style.display = 'none';
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