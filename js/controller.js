import _display from './display.js';
import _keyBoard from './keyboard.js';

let first_number = '';
let second_number = '';
let sign = '';

//=========================== control event listener ====================
_keyBoard.addEventListener('number', (number) => {
    if (first_number == '' && number == 0) return;
    first_number = first_number + number;
    console.log(first_number);
    _display.render(first_number);
})

_keyBoard.addEventListener('dot', () => {
    if (first_number.includes('.') || first_number == '') return;
    first_number = first_number + '.';
    _display.render(first_number);
})

_keyBoard.addEventListener('back', () => {
    first_number = first_number.slice(0, -1);
    if (first_number == '') { return _display.renderZero() };
    _display.render(first_number);
})

_keyBoard.addEventListener('clear', () => {
    first_number = '';
    _display.renderZero();
})

_keyBoard.addEventListener('eclear', () => {
    first_number = '';
    _display.renderZero();
})

_keyBoard.addEventListener('sqrt', () => {
    first_number = Math.sqrt(first_number).toString();
    _display.render(first_number);
})

_keyBoard.addEventListener('power', () => {
    first_number = Math.pow(first_number, 2).toString();
    _display.render(first_number);
})

_keyBoard.addEventListener('oneDivision', () => {
    if (first_number === 0) return;
    first_number = 1 / first_number;
    _display.render(first_number);
})

_keyBoard.addEventListener('multiply', () => {
    toggleNumber();
    sign = '*';
})

_keyBoard.addEventListener('division', () => {
    toggleNumber();
    sign = '/';
})

_keyBoard.addEventListener('equal', () => {
    switch (sign) {
        case '*': {
            second_number = first_number * second_number;
            break;
        }
        case '/': {
            if (first_number == 0) return;
            second_number = second_number / first_number;
            break;
        }
    }
    _display.render(second_number);
    console.log(second_number)
})

// ========================== Define control function ==================

function toggleNumber() {
    second_number = first_number;
    first_number = '';
}