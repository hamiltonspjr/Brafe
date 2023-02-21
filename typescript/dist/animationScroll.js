export default function initAnimationScroll() {
    const sections = document.querySelectorAll('[data-animation="scroll"]');
    if (sections) {
        const windowHalf = window.innerHeight * 0.5;
        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - windowHalf;
                if (sectionTop < 0) {
                    section.classList.add("anima-scroll-section");
                }
            });
        }
        animaScroll();
        window.addEventListener("scroll", animaScroll);
    }
}
//# sourceMappingURL=animationScroll.js.map