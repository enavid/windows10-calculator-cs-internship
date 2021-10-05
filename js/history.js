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

function render(input, state) {

    _list.innerHTML = ' ';

    if (input.length == 0 || _state != state) {
        _message.innerHTML = _messages;
        _trash.style.display = 'none';
    }
    else {
        _message.innerHTML = '';
        _trash.style.display = 'flex';
    }
    if (_state == 'history' && state == 'history') {
        input.forEach(element => _list.prepend(creatItemHistory(element)));
    }
    else if (_state == 'memory' && state == 'memory') {
        input.forEach(element => _list.prepend(creatItemMemory(element)));
    }
}

function creatItemMemory(element) {
    const divTag1 = create('div');
    const divTag2 = create('div');
    const divTag3 = create('div')
    const spanTag1 = create('span');
    const spanTag2 = create('span');
    const spanTag3 = create('span');
    const li = create('li');

    divTag1.innerHTML = element.first_number;
    divTag1.classList.add('memory-item-result');

    spanTag1.innerHTML = 'MC';
    spanTag2.innerHTML = 'M+';
    spanTag3.innerHTML = 'M-';
    divTag2.appendChild(spanTag1);
    divTag2.appendChild(spanTag2);
    divTag2.appendChild(spanTag3);
    divTag2.classList.add('memory-item-btn');

    divTag3.appendChild(divTag1);
    divTag3.appendChild(divTag2);
    divTag3.classList.add('memory-item-container');
    li.appendChild(divTag3);
    return li;
}

function creatItemHistory(element) {
    const divTag1 = create('div');
    const divTag2 = create('div');
    const divTag3 = create('div');
    const li = create('li');
    let context1 = '';
    let context2 = '';

    context1 = element.first_number + ' ' + element.second_sign + ' ' + element.second_number + ' = ';
    divTag1.innerHTML = context1;
    divTag1.classList.add('history-item-expression')


    context2 = element.final_result;
    divTag2.innerHTML = context2;
    divTag2.classList.add('history-item-result');

    divTag3.appendChild(divTag1);
    divTag3.appendChild(divTag2);
    divTag3.classList.add('history-item-container');

    li.appendChild(divTag3);

    return li;
}
