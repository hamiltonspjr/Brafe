export default function initAnimationScroll() {
    // pegando as sections que serão animadas
    const sections = document.querySelectorAll('[data-animation="scroll"]');
    // verificando se as sections existem para aplicar a animação, caso não, nada será feito
    if(sections.length) {
        // pegando 60% do tamanho da tela do usuário
    const windowHalf = window.innerHeight * 0.5;
    // função que fará a animação ao scroll
    function animaScroll() {
       sections.forEach((section) => {
        // pegando a distancia do elemento atual em relação ao topo da página
        const sectionTop = section.getBoundingClientRect().top - windowHalf;
        
        if(sectionTop < 0) {
            section.classList.add('anima-scroll-section');
        }
       })
    }
    // ativando uma vez assim que o site é carregado para que não fique a tela totalmente em branco
    animaScroll();
    // adicionando o evento de scroll ao window
    window.addEventListener('scroll', animaScroll);
    }
}