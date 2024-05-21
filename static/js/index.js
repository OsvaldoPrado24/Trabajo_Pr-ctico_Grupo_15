// Función validar formulario
function validarDatos() {

    let telefono = document.getElementById("telefono").value.trim()
    let error = document.getElementById("campos")

    
    // Verificar si el nombre contiene solo tiene caracteres alfabéticos y mas de 3 letras   
    const nameInput = document.getElementById('nombre');
    const namePattern = /^[a-zA-Z\s]+$/;
    const trimmedName = nameInput.value.trim();
    if (!namePattern.test(trimmedName) || trimmedName.length <= 2) {
        formValid = false;
        error.style.color = "red"
        error.textContent = "Por favor ingrese un nombre válido que contenga solo letras  y más de 3 caracteres."

       return false
    } else {
        error.style.color = '1px solid #ccc';
    }
// Verificar si el apellido contiene solo tiene caracteres alfabéticos y mas de 3 letras
    const apellidoInput = document.getElementById('apellido');
    const apellidoPattern = /^[a-zA-Z\s]+$/;
    const trimapellido = apellidoInput.value.trim();
    if (!apellidoPattern.test(trimapellido) || trimapellido.length <= 2) {
        formValid = false;
        error.style.color = "red"
        error.textContent = "Por favor ingrese un apellido válido que contenga solo letras  y más de 3 caracteres."

       return false
    } else {
        nameInput.style.border = '1px solid #ccc';
    }
// Validar correo electrónico
const emailInput = document.getElementById('email');
const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
if (!emailPattern.test(emailInput.value)) {
    formValid = false;
    emailInput.style.border = '1px solid red';
    error.textContent="Por favor, ingrese una dirección de correo electrónico válida."
    return false
} else {
    emailInput.style.border = '1px solid #ccc';
}
    // Verificar tel no es un número
    if (isNaN(telefono)) {
        error.textContent = "Por favor ingrese solo números."
        error.style.color = "brown"
        return false
    }

    // Si todas las validaciones son exitosas, informar
    alert("Datos validados.")
    return true

}

