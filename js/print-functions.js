// Funciones de impresión para los diferentes componentes del juego

// Función para imprimir el manual completo
function printManual() {
    // Aplicar estilos de impresión
    document.body.classList.add('print-manual');
    
    // Ocultar elementos no necesarios para la impresión
    const elementsToHide = document.querySelectorAll('.navigation, .scroll-indicator, .terminal-text');
    elementsToHide.forEach(element => {
        element.style.display = 'none';
    });
    
    // Ejecutar la impresión
    window.print();
    
    // Restaurar estilos después de la impresión
    setTimeout(() => {
        document.body.classList.remove('print-manual');
        elementsToHide.forEach(element => {
            element.style.display = '';
        });
    }, 1000);
}

// Función para imprimir la página actual
function printCurrentPage() {
    window.print();
}

// Función para imprimir el tablero
function printBoard() {
    // Aplicar estilos de impresión
    document.body.classList.add('print-board');
    
    // Ocultar elementos no necesarios para la impresión
    const elementsToHide = document.querySelectorAll('.navigation, .scroll-indicator, .terminal-text');
    elementsToHide.forEach(element => {
        element.style.display = 'none';
    });
    
    // Ejecutar la impresión
    window.print();
    
    // Restaurar estilos después de la impresión
    setTimeout(() => {
        document.body.classList.remove('print-board');
        elementsToHide.forEach(element => {
            element.style.display = '';
        });
    }, 1000);
}

// Función para imprimir los dados
function printDice() {
    // Aplicar estilos de impresión
    document.body.classList.add('print-dice');
    
    // Ocultar elementos no necesarios para la impresión
    const elementsToHide = document.querySelectorAll('.navigation, .scroll-indicator, .terminal-text');
    elementsToHide.forEach(element => {
        element.style.display = 'none';
    });
    
    // Ejecutar la impresión
    window.print();
    
    // Restaurar estilos después de la impresión
    setTimeout(() => {
        document.body.classList.remove('print-dice');
        elementsToHide.forEach(element => {
            element.style.display = '';
        });
    }, 1000);
}

// Función para imprimir componentes específicos
function printComponents(componentType) {
    // Aplicar estilos de impresión
    document.body.classList.add('print-components');
    
    // Ocultar todos los componentes primero
    const allComponents = document.querySelectorAll('.print-content');
    allComponents.forEach(component => {
        component.style.display = 'none';
    });
    
    // Mostrar solo el componente seleccionado
    const selectedComponent = document.getElementById(componentType);
    if (selectedComponent) {
        selectedComponent.style.display = 'flex';
        selectedComponent.style.flexWrap = 'wrap';
        selectedComponent.style.justifyContent = 'center';
    }
    
    // Ocultar elementos no necesarios para la impresión
    const elementsToHide = document.querySelectorAll('.navigation, .scroll-indicator, .terminal-text, h2:not(#' + componentType + '-title), p:not(.' + componentType + '-description)');
    elementsToHide.forEach(element => {
        element.style.display = 'none';
    });
    
    // Ejecutar la impresión
    window.print();
    
    // Restaurar estilos después de la impresión
    setTimeout(() => {
        document.body.classList.remove('print-components');
        allComponents.forEach(component => {
            component.style.display = '';
        });
        elementsToHide.forEach(element => {
            element.style.display = '';
        });
    }, 1000);
}

// Configurar los botones de impresión cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Configurar botones de impresión de componentes
    const printButtons = document.querySelectorAll('.print-button');
    printButtons.forEach(button => {
        const componentType = button.getAttribute('data-print-cards');
        if (componentType) {
            button.addEventListener('click', function() {
                printComponents(componentType);
            });
        }
    });
});
