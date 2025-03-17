document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const icon = button.querySelector('i');
        icon.classList.toggle('bi-plus-circle');
        icon.classList.toggle('bi-check-circle');
    });
});