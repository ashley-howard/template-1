if (document.getElementById('typed')) {
    var typed = new Typed('#typed', {
        // stringsElement: '#typed-strings',
        strings: ['This could be your website', 'This could be your project', 'This could be your brand', 'This could be your company...'],
        // showCursor: false,
        typeSpeed: 50
    });
}

const menuBtn = document.getElementById('menu-btn')
const links = document.getElementById('links')

menuBtn.onclick = function () { openMenu() }

function openMenu() {
    if (links.style.display == 'flex') {
        links.style.display = 'none';
        menuBtn.src = 'media/menu.svg';
        menuBtn.style.filter = 'invert(0)';

    } else {
        links.style.display = 'flex';
        menuBtn.src = 'media/close.svg';
        menuBtn.style.filter = 'invert(1)';        
    }
}