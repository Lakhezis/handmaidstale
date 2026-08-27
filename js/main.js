document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu_bar');

    if (toggleBtn && menu) {
        toggleBtn.addEventListener('click', function() {
            // Alternar clase 'active' en el botón (para la animación de la X)
            toggleBtn.classList.toggle('active');
            // Alternar clase 'active' en el menú (para mostrarlo/ocultarlo)
            menu.classList.toggle('active');
        });

        // Opcional: cerrar el menú al hacer clic en un enlace (mejora la UX)
        const links = menu.querySelectorAll('a');
        links.forEach(function(link) {
            link.addEventListener('click', function() {
                toggleBtn.classList.remove('active');
                menu.classList.remove('active');
            });
        });
    }
});
