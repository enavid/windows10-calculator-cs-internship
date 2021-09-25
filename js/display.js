const get = document.getElementById.bind(document);
const create = document.createElement.bind(document);
const disp = get('dis-number-p');
const history = get('dis-history-p');

//================================ Display API ===========================
export default { render, renderZero, renderHistory };

//=========================== Define display function ===================

function render(value) {
    const display = Object.values(value).filter((e) => {
        return e != ''
    });

    const temp = display.join('');
    temp == '' ? renderZero() : disp.innerHTML = temp;
}

function renderZero() {
    disp.innerHTML = '0';
}

function renderHistory(disp) {
    history.innerHTML = disp;
}

