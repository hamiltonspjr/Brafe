export default function initScrollSuave() {
    // pegando os links que sejam internos
    const linksInternos = document.querySelectorAll('[data-menu-scroll="suave"] a[href^="#"]');
    // pegando o menu list
    const menuList = document.querySelector('[data-menu="list"]');
    // verificando se os linksInternos existem para ai executar a animação
    if(linksInternos.length) {
        // função que irá fazer o scroll suave
    function scrollToSection(event) {
        // previnir o efeito padrão do link
        event.preventDefault();
         // verificação para saber se esta no menu mobile
         if(menuList.classList.contains('on')) {
            closeMenu();
        }
        // pegando o href do link clicado
        const href = event.currentTarget.getAttribute('href');
        // selecionando a section correspondente ao href anterior 
        const section = document.querySelector(href);
        // função nativa para scroll
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // fazendo loop nos links e adicionando evento de click
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    })
    // função para quando for clicado no link e estiver no mobile, fechar o meu e ter o scroll
    function closeMenu(event) {
        menuList.classList.remove('on');
    }
    }
}
