document.addEventListener('DOMContentLoaded', function () {
    console.log('El DOM ha sido cargado y la página está lista.');

    // Navegación fluida para los enlaces ancla
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Manejo del formulario de contacto
    const contactForm = document.querySelector('#inscripciones form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevenir el envío real del formulario

            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.innerHTML = 'Enviando...';

            // Simular el envío y mostrar un mensaje de éxito después de un breve retraso
            setTimeout(() => {
                this.reset(); // Limpiar el formulario
                submitButton.disabled = false;
                submitButton.innerHTML = 'Enviar Mensaje';
                alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            }, 1000);
        });
    }
});
