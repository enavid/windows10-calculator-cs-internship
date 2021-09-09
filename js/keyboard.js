const get = document.getElementById.bind(document);
const keyboard = get('keyboard');

//================================ Keyboard API ===========================
export default {};

//=========================== Keyboard event listener ====================
console.log(keyboard)
keyboard.addEventListener('click', (e) => {
    e.preventDefault();
    const event = e.target.getAttribute('value');
    console.log(event)
})

//=========================== Define keyboard function ===================