const get = document.getElementById.bind(document);
const create = document.createElement.bind(document);
const disp = get('dis-number-p');
//================================ Display API ===========================
export default { render };

//=========================== Define display function ===================

function render(value) {
    disp.innerHTML = value;
}

