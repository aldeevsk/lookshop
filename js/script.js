/* Mobile nav */

const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');
const navTitle = document.querySelector('.mobile-nav-title');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    navTitle.classList.toggle('active');
});

