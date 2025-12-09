JavaScript se utiliza para añadir comportamiento dinámico. Un ejemplo común es un menú de navegación responsive (hamburguesa) o una galería de imágenes con carrusel.

Fragmento de JS (para un menú hamburguesa):

JavaScript

// Asumiendo un botón con id="menu-toggle" y un nav con id="main-nav"

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    menuToggle.addEventListener('click', () => {
        // Alterna una clase para mostrar/ocultar el menú
        mainNav.classList.toggle('active'); 
        
        // Mejora de accesibilidad: alterna el atributo aria-expanded
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !isExpanded);
    });
});
