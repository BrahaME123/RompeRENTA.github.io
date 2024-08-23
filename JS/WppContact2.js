document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.whatsapp-btn2').forEach(button => {
        button.addEventListener('click', function() {
            let articuloId = this.parentNode.id;
            let numeroWhatsApp = "528115685758"; // Número en formato internacional sin el "+"
            let mensaje = `Hola, estoy interesado en rentar el artículo con ID: ${articuloId}. ¿Podrías darme más información?`;
            let enlace = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
            window.open(enlace, '_blank');
        });
    });
});
