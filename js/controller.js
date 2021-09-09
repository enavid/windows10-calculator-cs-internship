import _display from './display.js';
import _keyBoard from './keyboard.js';

let input = '';

//=========================== control event listener ====================
_keyBoard.addEventListener('number', (number) => {
    input = input + number;
    console.log(input);
    _display.render(input);
})

_keyBoard.addEventListener('back', () => {
    input = input.slice(0, -1);
    if (input == '') { return _display.renderZero() };
    _display.render(input);
})

_keyBoard.addEventListener('clear', () => {
    input = '';
    _display.renderZero();
})

// ========================== Define control function ==================