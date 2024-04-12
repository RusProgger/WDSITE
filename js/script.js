const burgerMenu = document.querySelector('.menu__burger').onclick = function() {
    document.querySelector('.menu__list').classList.toggle('active-menu')
    document.querySelector('.menu__burger').classList.toggle('active')
}