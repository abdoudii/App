let marker = document.querySelector('#marker');
let sections = document.querySelectorAll('section');
let list = document.querySelectorAll('.nav li');

function moveIndicator(e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
}

function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

function activateSection(index) {
    sections.forEach((section) => section.classList.remove('active'));
    sections[index].classList.add('active');
}

list.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        moveIndicator(e.target);
        activeLink.call(link);
        activateSection(index);
    });
});
