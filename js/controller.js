import _display from './display.js';
import _keyBoard from './keyboard.js';


_display.render(100)

_keyBoard.addEventListener('number', (number) => {
    console.log('controller', number);
})