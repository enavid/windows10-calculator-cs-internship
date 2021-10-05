const get = document.getElementById.bind(document);
const create = document.createElement.bind(document);
const disp = get('dis-number-p');
const history = get('dis-history-p');
const _icon1 = get('dis-icon3');
const _icon2 = get('nav-bar-img');
const _nav = get('nav-bar');
const _memory = document.getElementsByClassName('toggle');

//================================ Display API ===========================
export default { render_result, renderZero, render_history, clear_history, activeMemory, deactiveMemory };

//=========================== Display event listener ====================
_icon1.addEventListener('click', (e) => {
    e.preventDefault();
    _nav.style.display = 'flex';
})

_icon2.addEventListener('click', (e) => {
    e.preventDefault();
    _nav.style.display = 'none';
})

//=========================== Define display function ===================

function render_result(value) {
    value == '' ? renderZero() : disp.innerHTML = value;
}

function render_history(value) {
    const display = Object.values(value).filter((e) => {
        return e != '';
    });
    let temp = display.join(' ');
    if (temp.includes('=')) temp = temp.slice(0, temp.indexOf('=') + 1);
    temp == '' ? renderZero() : history.innerHTML = temp;
}
function clear_history() {
    history.innerHTML = '';
}

function renderZero() {
    disp.innerHTML = '0';
}

function activeMemory() {
    _memory[0].classList.remove('deactivate');
    _memory[0].classList.add('activate');
    _memory[1].classList.remove('deactivate');
    _memory[1].classList.add('activate');
}

function deactiveMemory() {
    _memory[0].classList.remove('activate');
    _memory[0].classList.add('deactivate');
    _memory[1].classList.remove('activate');
    _memory[1].classList.add('deactivate');
}

