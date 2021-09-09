import _display from './display.js';
import _keyBoard from './keyboard.js';

let temp = '';
const input = [];

//=========================== control event listener ====================
_keyBoard.addEventListener('number', (number) => {
    temp = temp + number;
    console.log(temp);
    _display.render(temp)
})

// ========================== Define control function ==================