export default function initMenuMobile() {
    const menuMobile = document.querySelector('[data-menu="mobile"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const buttonClose = document.querySelector('.menu-close');

    function openMenu(event) {
        menuList.classList.add('on');
    }
    function closeMenu(event) {
        menuList.classList.remove('on');
    }

    menuMobile.addEventListener('click', openMenu);
    buttonClose.addEventListener('click', closeMenu);
    
}