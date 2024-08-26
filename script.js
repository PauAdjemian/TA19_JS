const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameInput = document.querySelector('input[type="text"]');

const mensajeEmail = document.getElementById('mensajeEmail');
const mensajeContraseña = document.getElementById('mensajeContraseña');
const mensajeNombre = document.getElementById('mensajeNombre');

function validarEmail() {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (!emailValue) {
        mensajeEmail.textContent = 'El correo no puede estar vacío.';
        mensajeEmail.style.color = 'red';
    } else if (!emailPattern.test(emailValue)) {
        mensajeEmail.textContent = 'El correo no es válido.';
        mensajeEmail.style.color = 'red';
    } else {
        mensajeEmail.textContent = '';
    }
}

function validarContraseña() {
    const passwordValue = passwordInput.value.trim();
    
    if (!passwordValue) {
        mensajeContraseña.textContent = 'La contraseña no puede estar vacía.';
        mensajeContraseña.style.color = 'red';
    } else if (passwordValue.length < 8) {
        mensajeContraseña.textContent = 'La contraseña debe tener al menos 8 caracteres.';
        mensajeContraseña.style.color = 'red';
    } else {
        mensajeContraseña.textContent = '';
    }
}

function validarNombre() {
    const nameValue = nameInput.value.trim();
    
    if (!nameValue) {
        mensajeNombre.textContent = 'El nombre no puede estar vacío.';
        mensajeNombre.style.color = 'red';
    } else {
        mensajeNombre.textContent = '';
    }
}

emailInput.addEventListener('input', validarEmail);
passwordInput.addEventListener('input', validarContraseña);
nameInput.addEventListener('input', validarNombre);

document.querySelector('form').addEventListener('submit', function(event) {
    validarEmail();
    validarContraseña();
    validarNombre();

    if (mensajeEmail.textContent || mensajeContraseña.textContent || mensajeNombre.textContent) {
        event.preventDefault();
    }
});
