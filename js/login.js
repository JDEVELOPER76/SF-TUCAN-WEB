document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});

function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulación de autenticación
    if (username && password) {
        // Aquí iría la llamada a tu API de autenticación
        authenticateUser(username, password);
    } else {
        showMessage('error', 'Por favor ingresa usuario y contraseña');
    }
}

function authenticateUser(username, password) {
    // Simulación de llamada AJAX
    console.log('Intentando autenticar:', username);
    
    // Simular respuesta exitosa
    setTimeout(() => {
        showMessage('success', '¡Bienvenido al sistema!');
        // Redirigir al dashboard
        window.location.href = 'dashboard.html';
    }, 1000);
}

// Función para mostrar mensaje de error
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${message}`;
    
    const form = document.querySelector('.login-form');
    form.insertBefore(errorDiv, form.firstChild);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}