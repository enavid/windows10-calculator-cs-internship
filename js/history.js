const get = document.getElementById.bind(document);
const create = document.createElement.bind(document);
const _eventHandler = {};
const history = get('his-message');

//================================ History API ===========================
export default { render };

//=========================== Define keyboard function ===================

function addEventListener(option, callBack) {
    _eventHandler[option] = callBack;
}