// Funciones principales del sistema
document.addEventListener('DOMContentLoaded', function() {
    // Inicialización de componentes
    initApp();
    
    // Manejo de eventos
    setupEventListeners();
});

function initApp() {
    // Inicialización de funcionalidades
    console.log('Sistema TUCAN iniciado');
}

function setupEventListeners() {
    // Eventos para navegación
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            navigateTo(target);
        });
    });
}

function navigateTo(page) {
    // Redirigir a página específica
    window.location.href = page;
}

// Funciones utilitarias
function showMessage(type, message) {
    // Mostrar mensaje de alerta
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    
    document.body.appendChild(alertDiv);
    
    // Eliminar después de 3 segundos
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}

// Formateo de números
function formatCurrency(amount) {
    return new Intl.NumberFormat('es-EC', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// Validación de formularios
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required]');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}