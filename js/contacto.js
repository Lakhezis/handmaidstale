document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formulario-contacto');
    const status = document.getElementById('contacto-estado');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        status.textContent = 'Los campos están completos. Esta demostración no envía ni guarda tu mensaje.';
    });
});
