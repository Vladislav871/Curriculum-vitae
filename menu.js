const lineIcon = document.querySelectorAll('.menu-str');
const lineIcon1 = document.querySelector('#str-hide')
const menuBar = document.getElementById('menu-bar');
let click = true;

const clikMenu = () => {
    if(click) {
        lineIcon1.style.opacity = '0%';
        lineIcon[0].style.transform = 'rotate(45deg)';
        lineIcon[0].style.position = 'relative';
        lineIcon[2].style.transform = 'rotate(-45deg)';
        lineIcon[2].style.position = 'relative';
        lineIcon[2].style.left = '2px';
        lineIcon[2].style.top = '1.05px';
        lineIcon[2].style.width = '43.99px';
        menuBar.style.right = '50px';
        click = false;
    } else {
        lineIcon1.style.opacity = '100%';
        lineIcon[0].style.transform = '';
        lineIcon[0].style.position = '';
        lineIcon[0].style.top = '';
        lineIcon[0].style.left = '';
        lineIcon[2].style.transform = '';
        lineIcon[2].style.position = '';
        lineIcon[2].style.left = '';
        menuBar.style.right = '350px';
        click = true;
    }
};