// Assuming a button with id="menu-toggle" and a nav with id="main-nav"

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    menuToggle.addEventListener('click', () => {
        // Toggles a class to show/hide the menu
        mainNav.classList.toggle('active'); 
        
        // Accessibility enhancement: toggles the aria-expanded attribute
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !isExpanded);
    });
});
