// Utilidades del sistema
class Utils {
    static formatCurrency(amount) {
        return new Intl.NumberFormat('es-EC', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    }

    static formatDate(date) {
        return new Date(date).toLocaleDateString('es-EC');
    }

    static showAlert(type, message, duration = 3000) {
        // Crear elemento de alerta
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 
                   type === 'error' ? 'exclamation-circle' : 
                   'info-circle'}"></i>
            ${message}
        `;
        
        document.body.appendChild(alert);
        
        // Eliminar después de tiempo especificado
        setTimeout(() => {
            alert.remove();
        }, duration);
    }

    static validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('input[required], select[required]');
        
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

    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Exportar para uso global
window.Utils = Utils;