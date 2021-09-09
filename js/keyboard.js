const get = document.getElementById.bind(document);
const keyboard = get('keyboard');

//================================ Keyboard API ===========================
export default {};

//=========================== Keyboard event listener ====================
console.log(keyboard)
keyboard.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('yes')
})

//=========================== Define keyboard function ===================