document.addEventListener('DOMContentLoaded', function () {
    const aside = document.getElementById('aside');
    const menu = document.getElementById('menu');
    const opciones = document.querySelectorAll('.opcion');
    menu.onclick = () => {
        aside.classList.toggle('active');
        mainContent.classList.toggle('active');
    };
    for (let i = 0; i < opciones.length; i++) {
        opciones[i].addEventListener('click', function () {
            const id = this.id.replace('dashboard', '');
            const submenu = document.getElementById('submenu' + id);
            submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
        });
    }
    });
