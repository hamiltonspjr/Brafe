export default function initMenuMobile() {
    const menuMobile = document.querySelector('[data-menu="mobile"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const buttonClose = document.querySelector(".menu-close");
    function openMenu() {
        if (menuList && menuList instanceof HTMLElement) {
            menuList.classList.add("on");
        }
    }
    function closeMenu() {
        if (menuList && menuList instanceof HTMLElement) {
            menuList.classList.remove("on");
        }
    }
    if (menuMobile) {
        menuMobile.addEventListener("click", openMenu);
    }
    if (buttonClose) {
        buttonClose.addEventListener("click", closeMenu);
    }
}
//# sourceMappingURL=menuMobile.js.map