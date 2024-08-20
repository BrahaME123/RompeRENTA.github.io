document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.whatsapp-btn2').forEach(button => {
        button.addEventListener('click', function() {
            let numeroWhatsApp = "528117389778"; // Número en formato internacional sin el "+"
            let mensaje = `Hola, ¿Podrías darme más información acerca de las rompedoras??`;
            let enlace = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
            window.open(enlace, '_blank');
        });
    });
});
