document.addEventListener('DOMContentLoaded', function () {

    /* ---- MENÚ HAMBURGUESA ---- */

    const toggleBtn = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu_bar');

    if (toggleBtn && menu) {

        toggleBtn.addEventListener('click', function () {
            toggleBtn.classList.toggle('active');
            menu.classList.toggle('active');
        });

        /* Cerrar el menú al hacer click en un enlace */

        const links = menu.querySelectorAll('a');

        links.forEach(function (link) {
            link.addEventListener('click', function () {
                toggleBtn.classList.remove('active');
                menu.classList.remove('active');
            });
        });
    }


    /* ---- DROPDOWNS EN CELULAR ---- */

    const dropdowns = document.querySelectorAll('.dropdown');
    const submenus = document.querySelectorAll('.dropdown-submenu');


    /* Personajes / Gilead */

    dropdowns.forEach(function (dropdown) {

        const button = dropdown.querySelector('.menu-link');

        button.addEventListener('click', function () {

            /* Solo funciona como click en celular */

            if (window.innerWidth <= 480) {
                dropdown.classList.toggle('open');
            }

        });

    });


    /* Resistencia y Aliados / Régimen de Gilead */

    submenus.forEach(function (submenu) {

        const button = submenu.querySelector('.submenu-link');

        button.addEventListener('click', function () {

            if (window.innerWidth <= 480) {
                submenu.classList.toggle('open');
            }

        });

    });

});
