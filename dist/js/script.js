const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');
//Получаем по селектору все эти элементы

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
}); //При нажатии на гамбургер появляется класс active

close.addEventListener('click', () => {
    menu.classList.remove('active');
}); //При нажатии на крестик пропадает класс active

