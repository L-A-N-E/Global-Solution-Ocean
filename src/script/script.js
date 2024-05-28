// Abrir Menu 
function abrirMenu() {
    const open = document.getElementById('nav-mobile');
    open.style.animationName = 'slideFromRight'; 
    setTimeout(()=> {
        open.style.display = 'flex';
    }, 200);
}

// Fechar Menu
function fecharMenu() {
    const close = document.getElementById('nav-mobile')
    close.style.animationName = 'slideToRight'; 
    setTimeout(()=> {
        close.style.display = 'none';
    }, 150);
}

// Efeito Scroll Header
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) { // Alterar para o valor desejado para ativar a transição
        header.classList.add('scrolled');
        header.classList.remove('transparent');
    } else {
        header.classList.remove('scrolled');
        header.classList.add('transparent');
    }
});