const $el = document.getElementById('arrow-back');
const $body = document.querySelector('body');

document.querySelector('.scrollTop').addEventListener('click', function(){
    let scrolled = window.pageYOffset;
    scrollTop(scrolled, 1);
    $el.style.opacity = '0%';
});

function scrollTop(endPos, i){
    setTimeout(function(){
        if(parseInt(endPos) > 0) {
            let y = parseInt(endPos) - 5 * parseInt(i);
            window.scroll(0, y); 
            scrollTop(y, parseInt(i)+2);
        }
    }, 10);
}

$body.addEventListener('wheel', () => {
    if(window.pageYOffset > 100) {
        $el.style.opacity = '100%';
    } else {
        $el.style.opacity = '0%';
    }
});

let showArrow = () => {
    $el.style.opacity = '100%';
}

