const get = document.getElementById.bind(document);
const keyboard = get('keyboard');
const _eventHandler = {};

let number = '';

//================================ Keyboard API ===========================
export default { addEventListener };

//=========================== Keyboard event listener ====================

keyboard.addEventListener('click', (e) => {
    e.preventDefault();
    const value = e.target.getAttribute('value');

    if (isNumber(value)) {
        number = number + value;
        return _eventHandler.number(number);

    } else if (isNumberOperator(value)) {

        if (value === 'back' && number != '') {
            number = number.substring(0, number.length - 1);
            return _eventHandler.number(number);
        }

        if (value === 'clear' || value === 'eclear') {
            number = '';
            return _eventHandler.number(number);
        }

    } else {
        return _eventHandler.operator(value);
    }
})


//=========================== Define keyboard function ===================

function addEventListener(option, callBack) {
    _eventHandler[option] = callBack;
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function isNumberOperator(value) {
    const operator = 'eclear,clear,back';
    return operator.includes(value);
}



