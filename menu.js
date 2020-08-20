const lineIcon = document.querySelectorAll('.menu-str');
const menuBar = document.getElementById('menu-bar');
let click = true;

const clickMenu = () => {
    if(click) {
        lineIcon[1].style.display = 'none';
        lineIcon[0].style.transform = 'rotate(45deg)';
        lineIcon[0].style.position = 'relative';
        lineIcon[0].style.top = '14px';
        lineIcon[0].style.left = '1px';
        lineIcon[2].style.transform = 'rotate(-45deg)';
        lineIcon[2].style.position = 'relative';
        lineIcon[2].style.left = '2px'
        menuBar.style.height = '600px';
        menuBar.style.width = '200px';
        click = false;
    } else {
        lineIcon[1].style.display = 'block';
        lineIcon[0].style.transform = '';
        lineIcon[0].style.position = '';
        lineIcon[0].style.top = '';
        lineIcon[0].style.left = '';
        lineIcon[2].style.transform = '';
        lineIcon[2].style.position = '';
        lineIcon[2].style.left = '';
        menuBar.style.height = '0px';
        menuBar.style.width = '0px';
        click = true;
    }
};