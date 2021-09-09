const get = document.getElementById.bind(document);
const create = document.createElement.bind(document);
const disp = get('dis-number-p');
//================================ Display API ===========================
export default { render, renderZero };

//=========================== Define display function ===================

function render(value) {

    disp.innerHTML = value;
}
function renderZero() {
    render(0);
}

