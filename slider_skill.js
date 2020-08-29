const $skill1 = document.getElementById('line_skill_1');
const $skill2 = document.getElementById('line_skill_2');
const $skill3 = document.getElementById('line_skill_3');
const $skill4 = document.getElementById('line_skill_4');
const $skill5 = document.getElementById('line_skill_5');
const $skill6 = document.getElementById('line_skill_6');

const $per1 = document.getElementById('skill-1');
const $per2 = document.getElementById('skill-2');
const $per3 = document.getElementById('skill-3');
const $per4 = document.getElementById('skill-4');
const $per5 = document.getElementById('skill-5');
const $per6 = document.getElementById('skill-6');

let check = true;

document.querySelector('body').addEventListener('wheel', () => {
    console.log(window.pageYOffset);
    let scroll = window.pageYOffset;
    if(scroll >= 2000) {
        showSkills();
        if(check) {
            showPer($per1, 90);
            showPer($per2, 95);
            showPer($per3, 5);
            showPer($per4, 90);
            showPer($per5, 80);
            showPer($per6, 96);
        }
    } else {
        hideSkills();
        $per1.innerHTML = '0%';
        $per2.innerHTML = '0%';
        $per3.innerHTML = '0%';
        $per4.innerHTML = '0%';
        $per5.innerHTML = '0%';
        $per6.innerHTML = '0%';
        check = true;
    }
});

// 2199

function showSkills() {
    $skill1.style.width = '222px';
    $skill2.style.width = '230px';
    $skill3.style.width = '50px';
    $skill4.style.width = '222px';
    $skill5.style.width = '200px';
    $skill6.style.width = '230px';
};

function hideSkills() {
    $skill1.style.width = '2px';
    $skill2.style.width = '2px';
    $skill3.style.width = '2px';
    $skill4.style.width = '2px';
    $skill5.style.width = '2px';
    $skill6.style.width = '2px';
}

function showPer(elem, value) {
    check = false;
    let i = 0;
    let timer = setInterval(() => {
        if(i != value) i += 1;
        elem.innerHTML = i + '%';
    }, 15); 
};