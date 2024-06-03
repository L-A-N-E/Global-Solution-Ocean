// ELEMENTOS
// Animação de Entrada com a class Hidden
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll(".hidden-right-to-left, .hidden-left-to-right");
    hiddenElements.forEach((el) => observer.observe(el));
});


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


// SEÇÃO TECNOLOGIA UTILIZADA
// Variaveis Tecnologia 
let imagens = ['../src/assets/tecnologias/html.png', '../src/assets/tecnologias/css.png', '../src/assets/tecnologias/js.png', '../src/assets/tecnologias/c++.png' , '../src/assets/tecnologias/py.png'];
let index = 0;
let time = 5000;

// Função Slide
function slideTecnologias() {
    document.getElementById('img-tec').style.opacity = '0';
    setTimeout(function() {
        document.getElementById('img-tec').src = imagens[index];
        index++;

        if (index == imagens.length) {
            index = 0;
        }

        document.getElementById('img-tec').style.opacity = '1';
    }, 200);
    setTimeout(slideTecnologias, time);
}
slideTecnologias();


// SEÇÃO PUBLICO ALVO

// Modal Animais
// Abrir Modal Animais Marinhos
function openModalAnimais() {
    const openAnimais = document.getElementById('modal-animal');
    openAnimais.style.display = 'flex';

    const closeDivAnimais = document.getElementById('animais');
    closeDivAnimais.style.display = 'none'; 

    const closeDivHumano = document.getElementById('seres-humanos');
    closeDivHumano.style.display = 'none';
}

// Fechar Modal Animais Marinhos
function closeModaAnimais() {
    const closeAnimais = document.getElementById('modal-animal');
    closeAnimais.style.display = 'none';

    const seeDivAnimais = document.getElementById('animais');
    seeDivAnimais.style.display = 'flex'; 

    const seeDivHumano = document.getElementById('seres-humanos');
    seeDivHumano.style.display = 'flex';
}

// Modal Seres Humanos
// Abrir Modal Seres Humanos
function openModaHumano() {
    const openAnimais = document.getElementById('modal-humano');
    openAnimais.style.display = 'flex';

    const closeDivAnimais = document.getElementById('animais');
    closeDivAnimais.style.display = 'none'; 

    const closeDivHumano = document.getElementById('seres-humanos');
    closeDivHumano.style.display = 'none';
}

// Fechar Modal Seres Humanos
function closeModaHumano() {
    const closeAnimais = document.getElementById('modal-humano');
    closeAnimais.style.display = 'none';

    const seeDivAnimais = document.getElementById('animais');
    seeDivAnimais.style.display = 'flex'; 

    const seeDivHumano = document.getElementById('seres-humanos');
    seeDivHumano.style.display = 'flex';
}


// FOOTER


document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('input-footer');
    const form = document.getElementById('form-input');

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            // Alerta SweetAlert
        Swal.fire({
            title: "Seu Email foi Enviado com Sucesso!",
            width: 600,
            icon: "success",
            padding: "3em",
            color: "#012E40",
            background: "#D8E6F2",
        }); 
        }

    });
});




