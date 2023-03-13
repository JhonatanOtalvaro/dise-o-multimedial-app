// Barra de navegación - animación

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// show/hide respuesta

const preguntas = document.querySelectorAll('.pregunta');

preguntas.forEach(pregunta => {
    pregunta.addEventListener('click', () => {
        pregunta.classList.toggle('open');

        // Cambio de ícono
        const icon = pregunta.querySelector('.pregunta__icon i');
        if(icon.className == 'uil uil-plus'){
            icon.className = "uil uil-minus";
        }else{
            icon.className = "uil uil-plus";
        }
    })
})

/* show/hide Nav Bar */

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close nav bar

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)