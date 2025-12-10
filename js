// 1. Alternar Menú Móvil
const menuToggle = document.getElementById('toggle-menu');
const nav = document.getElementById('main-nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    const isExpanded = nav.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', isExpanded); // Accesibilidad
});

// 2. Alternar Modo Oscuro
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    // Guardar preferencia del usuario (plus avanzado)
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
});

// Aplicar el tema guardado al cargar la página
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

// 3. Validación de Formulario Básico (Plus de Interactividad)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(event) {
    const emailInput = contactForm.querySelector('input[type="email"]');
    if (!emailInput.value.includes('@')) {
        alert('Por favor, ingresa un email válido.');
        event.preventDefault(); // Evita que se envíe el formulario
    } else {
        // En un proyecto real aquí se enviaría el formulario
        alert('Mensaje enviado (simulación)');
        event.preventDefault();
    }
});
