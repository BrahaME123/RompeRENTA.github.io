document.querySelectorAll('.whatsapp-button').forEach(button => {
    button.addEventListener('click', function() {
      // Encuentra el contenedor padre del botón y saca su id
      let articuloId = this.parentNode.id;
      
      // Define el número de WhatsApp al que quieres enviar el mensaje
      let numeroWhatsApp = "+528134179056"; // Número en formato internacional sin el "+"
      
      // Crea el mensaje que quieres enviar
      let mensaje = `Hola, estoy interesado en rentar el artículo con ID: ${articuloId}. ¿Podrías darme más información?`;
      
      // Crea el enlace de WhatsApp
      let enlace = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
      
      // Abre el enlace de WhatsApp en una nueva pestaña
      window.open(enlace, '_blank');
      
    });

  });
  