const get = document.getElementById.bind(document);
const create = document.createElement.bind(document);
const disp = get('dis-number-p');
const history = get('dis-history-p');

//================================ Display API ===========================
export default { render_result, renderZero, render_history };

//=========================== Define display function ===================

function render_result(value) {
    value == '' ? renderZero() : disp.innerHTML = value;
}

function render_history(value) {
    const display = Object.values(value).filter((e) => {
        return e != '';
    });
    let temp = display.join(' ');
    if (temp.includes('=')) temp = temp.slice(0, temp.indexOf('=') + 1);
    temp == '' ? renderZero() : history.innerHTML = temp;
}

function renderZero() {
    disp.innerHTML = '0';
}


