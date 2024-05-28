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
        header.classList.remove('transparente');
    } else {
        header.classList.remove('scrolled');
        header.classList.add('transparente');
    }
});


// Animação de Entrada com a class Hidden
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    })
})
const hiddenElemente = document.querySelectorAll(".hidden");
hiddenElemente.forEach((el)=> observer.observe(el));


// Animação Linha Seção Tecnologias Utilizadas
document.addEventListener('DOMContentLoaded', function() {
    const line = document.querySelector('.line');
    const container = document.querySelector('#title-tec');

    function checkScroll() {
        const containerPosition = container.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;

        if (containerPosition < screenPosition) {
            line.classList.add('active');
            window.removeEventListener('scroll', checkScroll); // Remove o evento após a ativação
        }
    }

    window.addEventListener('scroll', checkScroll);
});