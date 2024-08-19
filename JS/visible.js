document.addEventListener('DOMContentLoaded', function () {
    const articulos = document.querySelectorAll('.articulos');

    const options = {
      root: null, // Observa el viewport
      rootMargin: '0px',
      threshold: 0.5 // Porcentaje de visibilidad
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);

    articulos.forEach(articulo => {
      observer.observe(articulo);
    });
  });