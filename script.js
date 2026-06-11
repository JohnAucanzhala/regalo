// Elementos del Modal Principal
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const modal = document.getElementById('messageModal');
const bgMusic = document.getElementById('bgMusic');

// Elementos de la Paginación
const pages = document.querySelectorAll('.modal-page');
const prevPageBtn = document.getElementById('prevPageBtn');
const nextPageBtn = document.getElementById('nextPageBtn');
const pageIndicator = document.getElementById('pageIndicator');

let currentPage = 0; // La primera página es la 0

// Función para actualizar visualmente la página y los botones
function updatePagination() {
    // Quita la clase activa a todas las páginas y se la pone a la actual
    pages.forEach((page, index) => {
        if (index === currentPage) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });

    // Actualiza el indicador de texto (ej: "1 / 3")
    pageIndicator.textContent = `${currentPage + 1} / ${pages.length}`;

    // Controla si el botón 'Atrás' debe estar deshabilitado
    if (currentPage === 0) {
        prevPageBtn.disabled = true;
    } else {
        prevPageBtn.disabled = false;
    }

    // Controla el botón 'Siguiente' en la última página
    if (currentPage === pages.length - 1) {
        nextPageBtn.textContent = "Terminar"; // Puedes cambiar el texto si deseas
    } else {
        nextPageBtn.textContent = "Siguiente";
    }
}

// Evento para avanzar de página
nextPageBtn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updatePagination();
    } else {
        // Si está en la última página y presiona el botón, se cierra el modal
        modal.classList.remove('show');
    }
});

// Evento para retroceder de página
prevPageBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updatePagination();
    }
});

// Abrir el modal (reinicia siempre a la primera página)
openBtn.addEventListener('click', () => {
    currentPage = 0;
    updatePagination();
    modal.classList.add('show');
});

// Cerrar el modal
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});
openBtn.addEventListener('click', () => {
    currentPage = 0;
    updatePagination();
    modal.classList.add('show');
    
    // Intenta reproducir la música de fondo en bucle
    bgMusic.play().catch(error => {
        console.log("El navegador bloqueó el auto-play inicial, pero se activará al interactuar:", error);
    });
});