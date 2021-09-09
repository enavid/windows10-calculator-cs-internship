const get = document.getElementById.bind(document);
const keyboard = get('keyboard');
const _eventHandler = {};

//================================ Keyboard API ===========================
export default { addEventListener };

//=========================== Keyboard event listener ====================
console.log(keyboard)
keyboard.addEventListener('click', (e) => {
    e.preventDefault();
    const number = e.target.getAttribute('value');
    if (_eventHandler['number']) _eventHandler['number'](number);
})

//=========================== Define keyboard function ===================

function addEventListener(option, callBack) {
    _eventHandler[option] = callBack;
}