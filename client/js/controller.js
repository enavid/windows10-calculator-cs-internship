import _display from './display.js';
import _keyBoard from './keyboard.js';
import _history from './history.js';
let history = [];
let memory = [];

//=========================== control event listener ====================
_keyBoard.addEventListener('display', (input) => {
    if ((input.first_sign != '' || input.second_sign != '') && input.second_number == '') _display.render_history(input);
    if (input.first_number != '') _display.render_result(input.first_number);
    if (input.second_number != '') _display.render_result(input.second_number);
})

_keyBoard.addEventListener('clear', (input) => {
    clear(input);
    _display.clear_history(input);
    _display.renderZero();

})

_keyBoard.addEventListener('single_operator', (input) => {
    _display.render_history(input);

    if (input.first_number == '' && input.second_number == '') {
        input.first_number = '0';
        _display.render_result(input.first_number);
    }

    else if (input.second_number == '' && input.operation != '') {
        input.first_number = single_calculator(input.first_number, input.operation);
        input.operation = '';
        _display.render_result(input.first_number);
    }

    else if (input.first_number != '' && input.operation != '') {
        const number = input.second_number == '' ? input.first_number : input.second_number;
        input.second_number = single_calculator(number, input.operation);
        input.operation = '';
        _display.render_result(input.second_number);

    }
})

_keyBoard.addEventListener('next_operation', (input) => {
    input.final_result = double_calculator(input.first_number, input.second_number, input.first_sign, input.second_sign);
    history.push({ ...input });

    const final_result = input.final_result;
    const next_operation = input.next_operation;
    clear(input);
    input.first_number = final_result;
    input.second_sign = next_operation;
    _display.render_history(input);
    _display.render_result(input.first_number);
    _history.render(history, 'history')
})

_keyBoard.addEventListener('equal', (input) => {
    if (input.first_number != '' && input.second_number == '' && input.second_sign != '') {
        input.second_number = '0';
    }
    if (input.second_number == '') {

        if (history.length === 0 && input.second_number == '') {
            input.first_number = '0';
        }
        else {
            input.first_number = history[history.length - 1].final_result;
            input.second_number = history[history.length - 1].second_number;
            input.second_sign = history[history.length - 1].second_sign;
        }
    }

    input.final_result = double_calculator(input.first_number, input.second_number, input.first_sign, input.second_sign);
    history.push({ ...input });
    const final_result = input.final_result;
    _display.render_history(history[history.length - 1]);
    _display.render_result(input.final_result);
    _history.render(history, 'history')
    clear(input);
    input.first_number = final_result;
})

_keyBoard.addEventListener('negative', (input) => {
    _display.render_result(input);
})

_keyBoard.addEventListener('save_memory', (memory_data, input) => {
    if (memory.length !== 0 && input.first_number == '') {
        input.first_number = memory[memory.length - 1].first_number;
    }
    memory_data.first_number = input.first_number === '' ? '0' : input.first_number;
    input.first_number = '';
    memory.push(memory_data);
    _display.activeMemory();
    _history.render(memory, 'memory');
})

_keyBoard.addEventListener('operation_memory', (memory_data, input, operation) => {

    if (memory.length == 0) {
        memory_data.first_number = input.first_number;
        memory.push(memory_data);
        input.first_number = '';
    }
    else {
        const data = memory[memory.length - 1];
        if (input.first_number == '' && data.second_number == '0') {
            data.second_number = data.first_number;
        }
        else if (input.first_number != '') {
            data.second_number = input.first_number;
            input.first_number = '';
        }

        data.first_number = double_calculator(data.first_number, data.second_number, '', operation);
    }
    _history.render(memory, 'memory');
})

_keyBoard.addEventListener('recall_memory', (input) => {
    const mem = memory[memory.length - 1];
    if (mem === undefined) return;

    input.first_number = mem.first_number;
    _display.render_result(input.first_number);
})

_keyBoard.addEventListener('clear_memory', () => {
    memory = [];
    _display.deactiveMemory();
    _history.render(memory, 'memory');
})

_history.addEventListener('trash', () => {
    history = [];
    _history.render(history, 'history')
})

_history.addEventListener('trash', (state) => {

    if (state == 'history') {
        history = [];
        _history.render(history, 'history')
    }
    else if (state == 'memory') {
        memory = [];
        _history.render(history, 'history')
    }
})

_history.addEventListener('history', () => {
    _history.render(history, 'history');
})

_history.addEventListener('memory', () => {
    _history.render(memory, 'memory');
})


_history.addEventListener('clear_memory', (input) => {
    memory.splice(memory.indexOf(input), 1)
    _history.render(memory, 'memory');
    if (memory.length == 0) _display.deactiveMemory();
})

_history.addEventListener('operation_memory', (input, operation) => {
    if (input.second_number == '0') input.second_number = input.first_number;
    input.first_number = double_calculator(input.first_number, input.second_number, '', operation);
    if (memory.length == 0) _display.deactiveMemory();
    _history.render(memory, 'memory');
})

// ========================== Define control function ==================


function double_calculator(first_number, second_number, sign1, sign2) {

    if (sign1 == '' && sign2 == '') return '0';

    first_number = parseFloat(sign1 + first_number);
    second_number = parseFloat(second_number);
    let result = 0;
    switch (sign2) {
        case '+': {
            result = first_number + second_number;
            break
        }
        case '-': {
            result = first_number - second_number;
            break;
        }
        case '×': {
            result = first_number * second_number;
            break
        }
        case '÷': {
            result = first_number / second_number;
            break;
        }
        default: {
            result = '0';
        }
    }
    return result.toString();

}

function single_calculator(number, operator) {
    let result = 0;
    switch (operator) {
        case '√': {
            result = Math.sqrt(number);
            break;
        }
        case 'sqr': {
            result = Math.pow(number, 2);
            break;
        }
        case 'cube': {
            result = Math.pow(number, 3);
            break;
        }

        case '1/': {
            result = number = 1 / number;
            break;
        }
    }
    return result.toString();
}

function clear(input) {
    input.first_sign = '';
    input.first_number = '';
    input.second_number = '';
    input.second_sign = '';
    input.next_operation = '';
    input.operation = '';
    input.final_result = '';
};