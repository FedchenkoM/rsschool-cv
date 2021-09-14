const headerBurger = document.querySelector('.header__burger')
const headerBurgerMenu = document.querySelector('.header__adaptive')

headerBurger.addEventListener('click', adaptiveBurgerCtrl)

function adaptiveBurgerCtrl() {
    headerBurgerMenu.classList.toggle('burger_active')
    console.log('sss');
}   