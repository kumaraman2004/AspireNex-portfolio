const navBar = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navBar.classList.add('active');
    } else {
        navBar.classList.remove('active');
    }
});

const menuIcon = document.getElementById('menu-icon');
const navlist = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
    navlist.classList.toggle('open');
});

const navLinks = document.querySelectorAll('.navlist a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});
