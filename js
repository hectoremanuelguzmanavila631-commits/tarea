document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Menú Desplegable Responsivo ---
    const menuToggle = document.getElementById('toggle-menu');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const isExpanded = mainNav.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Opcional: Cerrar el menú si se hace clic en un enlace (para UX móvil)
        document.querySelectorAll('#main-nav ul li a').forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth <= 768) { // Solo en móviles
                    mainNav.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // --- 2. Alternar Modo Oscuro/Claro ---
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)'); // Detecta preferencia del sistema

    // Función para aplicar el tema
    function applyTheme(theme) {
        document.body.classList.toggle('light-theme', theme === 'light');
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    // Carga la preferencia del tema guardada o detecta la del sistema
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        applyTheme(currentTheme);
    } else if (prefersDarkScheme.matches) {
        applyTheme('dark'); // Por defecto si el sistema prefiere oscuro
    } else {
        applyTheme('light'); // Por defecto si el sistema prefiere claro
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            let theme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
            applyTheme(theme);
        });
    }

    // --- 3. Validación de Formulario de Contacto ---
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita el envío por defecto

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            // Validación básica
            if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
                alert('Por favor, rellena todos los campos obligatorios.');
                return;
            }

            if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
                alert('Por favor, introduce un correo electrónico válido.');
                return;
            }

            // Si todo es válido, simula el envío
            alert('¡Mensaje enviado con éxito! Pronto me pondré en contacto contigo.');
            contactForm.reset(); // Limpia el formulario
            
            // Aquí iría la lógica para enviar el formulario a un servidor (ej. con fetch API)
        });
    }

}); // Fin de DOMContentLoaded
