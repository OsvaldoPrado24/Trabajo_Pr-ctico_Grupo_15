// scripts.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    let formValid = true;

    // Validar campos obligatorios
    document.querySelectorAll('#contactForm [required]').forEach(function(element) {
        if (!element.value) {
            formValid = false;
            element.style.border = '1px solid red';
        } else {
            element.style.border = '1px solid #ccc';
        }
    });

    // Validar checkbox de términos
    let terms = document.getElementById('terms');
    if (!terms.checked) {
        formValid = false;
        terms.nextElementSibling.style.color = 'red';
    } else {
        terms.nextElementSibling.style.color = 'black';
    }

    if (!formValid) {
        event.preventDefault();
        alert('Por favor, complete todos los campos obligatorios.');
    }
});
