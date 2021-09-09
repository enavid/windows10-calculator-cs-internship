const get = document.getElementById.bind(document);
const create = document.createElement.bind(document);
const disp = get('dis-number');
const text = get('dis-number-p');
//================================ Display API ===========================
export default { render };

//=========================== Define display function ===================

function render(value) {
    const pTag = create('p');
    pTag.innerHTML = value;
    disp.replaceChild(pTag, text);
    console.log(disp)
}

