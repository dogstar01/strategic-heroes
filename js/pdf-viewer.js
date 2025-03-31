// Función para abrir archivos PDF directamente
function openPDF(pdfPath) {
    // Abrir el PDF en una nueva pestaña
    window.open(pdfPath, '_blank');
}

// Función para preparar la estructura de directorios para futuros PDFs
function getPDFPath(componentType) {
    // Mapeo de tipos de componentes a sus directorios correspondientes
    const pdfDirectories = {
        'hero-cards': 'pdfs/heroes/Heroes SH.pdf',
        'strategy-cards': 'pdfs/estrategias/Estrategias SH.pdf',
        'obstacle-cards': 'pdfs/obstaculos/Obstaculo_SH.pdf',
        'enemy-cards': 'pdfs/enemigos/Enemigo_SH.pdf',
        'disaster-cards': 'pdfs/desastres/Desastre_SH.pdf',
        'event-cards': 'pdfs/eventos/Evento_SH.pdf',
        'reflection-cards': 'pdfs/reflexiones/Reflexion_SH.pdf',
        'hero-tokens': 'pdfs/fichas/Fichas_SH.pdf',
        'energy-tokens': 'pdfs/energia/Energia_SH.pdf'
    };
    
    return pdfDirectories[componentType] || '';
}
