// Funciones para visualizar las ilustraciones de todos los componentes del juego
document.addEventListener('DOMContentLoaded', function() {
    // Asignar las ilustraciones a cada héroe según el orden especificado
    const heroCards = document.querySelectorAll('.hero-card');
    const heroImages = [
        'assets/heroes/SH-H01.png', // Oráculo Supremo
        'assets/heroes/SH-H02.png', // Mente Cuántica
        'assets/heroes/SH-H03.png', // Tormenta Táctica
        'assets/heroes/SH-H04.png', // Sombra Persuasiva
        'assets/heroes/SH-H05.png', // Nexo Digital
        'assets/heroes/SH-H06.png', // Espíritu Inquebrantable
        'assets/heroes/SH-H07.png', // Vórtice Adquisitivo
        'assets/heroes/SH-H08.png'  // Guardián Implacable
    ];
    
    // Asignar las ilustraciones a las cartas de estrategia
    const strategyCards = document.querySelectorAll('.strategy-card');
    const strategyImages = [
        'assets/estrategias/SH-E01.png',
        'assets/estrategias/SH-E02.png',
        'assets/estrategias/SH-E03.png',
        'assets/estrategias/SH-E04.png',
        'assets/estrategias/SH-E05.png',
        'assets/estrategias/SH-E06.png',
        'assets/estrategias/SH-E07.png',
        'assets/estrategias/SH-E08.png',
        'assets/estrategias/SH-E09.png',
        'assets/estrategias/SH-E10.png',
        'assets/estrategias/SH-E11.png',
        'assets/estrategias/SH-E12.png',
        'assets/estrategias/SH-E13.png',
        'assets/estrategias/SH-E14.png',
        'assets/estrategias/SH-E15.png',
        'assets/estrategias/SH-E16.png',
        'assets/estrategias/SH-E17.png',
        'assets/estrategias/SH-E18.png',
        'assets/estrategias/SH-E19.png',
        'assets/estrategias/SH-E20.png'
    ];
    
    // Asignar las ilustraciones a las cartas de obstaculo
    const obstacleCards = document.querySelectorAll('.obstacle-card');
    const obstacleImages = [
        'assets/obstaculos/SH-O01.png',
        'assets/obstaculos/SH-O02.png',
        'assets/obstaculos/SH-O03.png',
        'assets/obstaculos/SH-O04.png',
        'assets/obstaculos/SH-O05.png',
        'assets/obstaculos/SH-O06.png',
        'assets/obstaculos/SH-O07.png',
        'assets/obstaculos/SH-O08.png',
        'assets/obstaculos/SH-O09.png',
        'assets/obstaculos/SH-O10.png',
        'assets/obstaculos/SH-O11.png',
        'assets/obstaculos/SH-O12.png'
    ];

    // Asignar las ilustraciones a las cartas de enemigo
    const enemyCards = document.querySelectorAll('.enemy-card');
    const enemyImages = [
        'assets/enemigos/SH-N01.png',
        'assets/enemigos/SH-N02.png',
        'assets/enemigos/SH-N03.png',
        'assets/enemigos/SH-N04.png',
        'assets/enemigos/SH-N05.png',
        'assets/enemigos/SH-N06.png',
        'assets/enemigos/SH-N07.png',
        'assets/enemigos/SH-N08.png',
        'assets/enemigos/SH-N09.png',
        'assets/enemigos/SH-N10.png',
        'assets/enemigos/SH-N11.png',
        'assets/enemigos/SH-N12.png'
    ];

    // Asignar las ilustraciones a las cartas de desastres
    const disasterCards = document.querySelectorAll('.disaster-card');
    const disasterImages = [
        'assets/desastres/SH-D01.png',
        'assets/desastres/SH-D02.png',
        'assets/desastres/SH-D03.png',
        'assets/desastres/SH-D04.png',
        'assets/desastres/SH-D05.png',
        'assets/desastres/SH-D06.png',
        'assets/desastres/SH-D07.png',
        'assets/desastres/SH-D08.png',
        'assets/desastres/SH-D09.png',
        'assets/desastres/SH-D10.png'
    ];

    // Asignar las ilustraciones a las cartas de eventos
    const eventCards = document.querySelectorAll('.event-card');
    const eventImages = [
        'assets/eventos/SH-V01.png',
        'assets/eventos/SH-V02.png',
        'assets/eventos/SH-V03.png',
        'assets/eventos/SH-V04.png',
        'assets/eventos/SH-V05.png',
        'assets/eventos/SH-V06.png',
        'assets/eventos/SH-V07.png',
        'assets/eventos/SH-V08.png',
        'assets/eventos/SH-V09.png',
        'assets/eventos/SH-V10.png'
    ];
    
    // Asignar las ilustraciones a las cartas de reflexiones
    const reflectionCards = document.querySelectorAll('.reflection-card');
    const reflectionImages = [
        'assets/reflexiones/SH-R01.png',
        'assets/reflexiones/SH-R02.png',
        'assets/reflexiones/SH-R03.png',
        'assets/reflexiones/SH-R04.png',
        'assets/reflexiones/SH-R05.png',
        'assets/reflexiones/SH-R06.png',
        'assets/reflexiones/SH-R07.png',
        'assets/reflexiones/SH-R08.png',
        'assets/reflexiones/SH-R09.png',
        'assets/reflexiones/SH-R10.png',
    ];

    // Crear el modal para mostrar las ilustraciones
    const modal = document.createElement('div');
    modal.className = 'hero-modal';
    modal.innerHTML = `
        <div class="hero-modal-content">
            <span class="hero-modal-close">&times;</span>
            <img class="hero-modal-image" src="" alt="Ilustración del componente">
            <div class="hero-modal-caption"></div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Obtener elementos del modal
    const modalImg = modal.querySelector('.hero-modal-image');
    const modalCaption = modal.querySelector('.hero-modal-caption');
    const closeBtn = modal.querySelector('.hero-modal-close');
    
    // Función genérica para añadir funcionalidad de clic a cualquier tipo de carta
    function addClickFunctionality(cards, images, cardType) {
        cards.forEach((card, index) => {
            // Añadir clase para indicar que es clickeable
            card.classList.add('clickable-card');
            
            // Añadir un pequeño indicador visual de que hay una imagen disponible
            const imageIndicator = document.createElement('div');
            imageIndicator.className = 'image-indicator';
            imageIndicator.innerHTML = '<span class="indicator-icon">🖼️</span>';
            card.appendChild(imageIndicator);
            
            // Añadir evento de clic para mostrar la ilustración
            card.addEventListener('click', function() {
                if (index < images.length) {
                    let title = '';
                    let subtitle = '';
                    
                    // Obtener título y subtítulo según el tipo de carta
                    if (cardType === 'hero') {
                        title = card.querySelector('.hero-card-title').textContent;
                        subtitle = card.querySelector('.hero-card-subtitle').textContent;
                    } else {
                        title = card.querySelector('.card-title').textContent;
                        subtitle = card.querySelector('.card-description') ? 
                                  card.querySelector('.card-description').textContent : '';
                    }
                    
                    modalImg.src = images[index];
                    modalCaption.textContent = subtitle ? `${title} - ${subtitle}` : title;
                    modal.style.display = 'flex';
                } else {
                    // Si no hay imagen disponible, mostrar un mensaje
                    let title = '';
                    if (cardType === 'hero') {
                        title = card.querySelector('.hero-card-title').textContent;
                    } else {
                        title = card.querySelector('.card-title').textContent;
                    }
                    
                    modalImg.src = '';
                    modalImg.alt = 'Imagen no disponible';
                    modalCaption.textContent = `${title} - Ilustración pendiente de añadir`;
                    modal.style.display = 'flex';
                }
            });
        });
    }
    
    // Añadir funcionalidad a todos los tipos de cartas
    addClickFunctionality(heroCards, heroImages, 'hero');
    addClickFunctionality(strategyCards, strategyImages, 'strategy');
    addClickFunctionality(obstacleCards, obstacleImages, 'obstacle');
    addClickFunctionality(enemyCards, enemyImages, 'enemy');
    addClickFunctionality(disasterCards, disasterImages, 'disaster');
    addClickFunctionality(eventCards, eventImages, 'event');
    addClickFunctionality(reflectionCards, reflectionImages, 'reflection');

    // Cerrar el modal al hacer clic en la X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Cerrar el modal al hacer clic fuera de la imagen
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
