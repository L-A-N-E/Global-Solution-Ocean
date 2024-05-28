// ELEMENTOS
// Animação de Entrada com a class Hidden
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    })
})
const hiddenElemente = document.querySelectorAll(".hidden-right-to-left, .hidden-left-to-right");
hiddenElemente.forEach((el)=> observer.observe(el));


// HEADER
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

    if (scrollPosition > 50) {
        header.classList.add('scrolled');
        header.classList.remove('transparente');
    } else {
        header.classList.remove('scrolled');
        header.classList.add('transparente');
    }
});


// SEÇÃO TECNOLOGIA
// Declarando Variaveis para Slide 
let imagens = ['../src/assets/tecnologias/html.png', '../src/assets/tecnologias/css.png', '../src/assets/tecnologias/js.png', '../src/assets/tecnologias/c++.png' , '../src/assets/tecnologias/py.png'];
let index = 0;
let time = 5000;

// Função Slide
function slideShow() {
    document.getElementById('img-banner').style.opacity = '0';
    setTimeout(function() {
        document.getElementById('img-banner').src = imagens[index];
        index++;

        if (index == imagens.length) {
            index = 0;
        }

        document.getElementById('img-banner').style.opacity = '1';
    }, 200);
    setTimeout(slideShow, time);
}
slideShow();