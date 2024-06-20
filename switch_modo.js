const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');

function store(value) {
    localStorage.setItem('darkmode', value);
}

function load() {
    const darkmode = localStorage.getItem('darkmode');

    if (!darkmode) {
        store(false);
        icon.classList.add('fa-sun');
        cambiarEstilo("#000");
        cambiarFondo("#F9F9F9")
    } else if (darkmode == 'true') {
        body.classList.add('darkmode');
        icon.classList.add('fa-moon');
        cambiarEstilo("#fff");
        cambiarFondo("#2b2b2b")
    } else if (darkmode == 'false') {
        icon.classList.add('fa-sun');
        cambiarEstilo("#000");
        cambiarFondo("#F9F9F9")
    }
}


load();

btn.addEventListener('click', () => {

    body.classList.toggle('darkmode');
    icon.classList.add('animated');

    store(body.classList.contains('darkmode'));

    if (body.classList.contains('darkmode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        cambiarEstilo("#fff");
        cambiarFondo("#2b2b2b")
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        cambiarEstilo("#000");
        cambiarFondo("#F9F9F9")
    }

    setTimeout(() => {
        icon.classList.remove('animated');
    }, 500)
})

function cambiarEstilo(color){
    let etiquetas=document.querySelectorAll(".modo_color");
    etiquetas.forEach(etiqueta => {
        etiqueta.style.color = color; 
    });
}

function cambiarFondo(color){
    let divs=document.querySelectorAll(".modo_fondo");
    divs.forEach(div => {
        div.style.backgroundColor = color;
    });
}