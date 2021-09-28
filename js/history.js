const get = document.getElementById.bind(document);
const create = document.createElement.bind(document);
const _eventHandler = {};
const _message = get('history-msg-p');
const _list = get('history-msg-list');
const _trash = get('history-trash-img');
const _history = get('history-memory-p1');
const _memory = get('history-memory-p2');
let _messages = 'There\'s no history yet';
let _state = 'history';
//================================ History API ===========================
export default { addEventListener, render };

//=========================== Keyboard event listener ====================
_trash.addEventListener('click', (e) => {
    e.preventDefault();
    _eventHandler.trash(_state);
})

_history.addEventListener('click', (e) => {
    e.preventDefault();

    _history.classList.add('history-memory-active');
    _memory.classList.remove('history-memory-active');
    _messages = 'There\'s no history yet';
    _state = 'history';
    _eventHandler.history();
})

_memory.addEventListener('click', (e) => {
    e.preventDefault();

    _memory.classList.add('history-memory-active');
    _history.classList.remove('history-memory-active');
    _messages = 'There\'s nothing saved in memory';
    _state = 'memory';
    _eventHandler.memory();

})

//=========================== Define keyboard function ===================

function addEventListener(option, callBack) {
    _eventHandler[option] = callBack;
}

function render(input) {

    _list.innerHTML = ' ';

    if (input.length == 0) {
        _message.innerHTML = _messages;
        _trash.style.display = 'none';
    }
    else {
        _message.innerHTML = '';
        _trash.style.display = 'flex';
    }

    input.forEach(element => _list.prepend(creatItem(element)));
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
