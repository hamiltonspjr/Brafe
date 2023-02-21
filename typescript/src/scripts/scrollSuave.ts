export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll<HTMLAnchorElement>(
    '[data-menu-scroll="suave"] a[href^="#"]'
  );
  const menuList = document.querySelector('[data-menu="list"]');
  if (linksInternos) {
    function scrollToSection(event: MouseEvent) {
      event.preventDefault();
      if (menuList && menuList.classList.contains("on")) {
        closeMenu();
      }
      const element = event.currentTarget;
      if (element && element instanceof HTMLElement) {
        const href = element.getAttribute("href");
        if (href) {
          const section = document.querySelector(href);
          section?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    }

    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });

    function closeMenu() {
      if (menuList) {
        menuList.classList.remove("on");
      }
    }
  }
}
