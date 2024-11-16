document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';

    if (currentTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        toggleButton.textContent = '☀️';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        toggleButton.textContent = '🌙';
    }

    toggleButton.addEventListener('click', () => {
        if (document.body.getAttribute('data-theme') === 'light') {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            toggleButton.textContent = '🌙';
        } else {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            toggleButton.textContent = '☀️';
        }
    });
});

