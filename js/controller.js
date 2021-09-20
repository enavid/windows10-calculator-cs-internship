import _display from './display.js';
import _keyBoard from './keyboard.js';

let controller_state = 0;
let first_number = '';
let second_number = '';

//=========================== control event listener ====================
_keyBoard.addEventListener('number', (number) => {
    if (controller_state === 0) {
        first_number = number;
        console.log(first_number);
    }
    if (controller_state === 3) {
        second_number = number;
        console.log(second_number);
    }
})

_keyBoard.addEventListener('single_operator', (operator) => {
    controller_state = 0; // check it and add return to if

    if (operator === 'sqrt') first_number = Math.sqrt(first_number);
    if (operator === 'power') first_number = Math.pow(first_number, 2);
    if (operator === 'oneDivision' && first_number != 0) first_number = 1 / first_number;
    console.log(first_number)
})

// ========================== Define control function ==================



function twice_operator(value) {
    const operator = '*/+-';
    return operator.includes(value);
}