document.addEventListener('DOMContentLoaded', function() {
    const texto = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    
    texto.forEach(elemento => {
        elemento.addEventListener('mouseenter', function() {
            elemento.style.transition = 'color 0.3s ease-in-out';
            elemento.style.color = '#FF5733'; // Cambiar a un color más impactante, como un rojo fuerte
        });
        elemento.addEventListener('mouseleave', function() {
            elemento.style.transition = 'color 0.3s ease-in-out';
            elemento.style.color = ''; // Restaurar el color por defecto
        });
    });

    const enlaces = document.querySelectorAll('nav a');

    enlaces.forEach(enlace => {
        enlace.addEventListener('mouseenter', function() {
            enlace.style.transition = 'color 0.3s ease-in-out';
            enlace.style.color = '#FF5733'; // Cambiar a un color más impactante, como un rojo fuerte
        });
        enlace.addEventListener('mouseleave', function() {
            enlace.style.transition = 'color 0.3s ease-in-out';
            enlace.style.color = ''; // Restaurar el color por defecto
        });
    });

    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        const titulo = item.querySelector('h3');
        const precio = item.querySelector('.precio');

        item.appendChild(overlay);

        item.addEventListener('mouseenter', function() {
            item.style.transition = 'transform 0.5s ease-in-out';
            item.style.transform = 'scale(1.05)';

            overlay.style.transition = 'opacity 0.5s ease-in-out';
            overlay.style.opacity = '0.8';

            titulo.style.color = '#FF5733'; // Cambiar color del título
            precio.style.fontWeight = 'bold'; // Hacer el precio en negrita
        });

        item.addEventListener('mouseleave', function() {
            item.style.transition = 'transform 0.5s ease-in-out';
            item.style.transform = 'scale(1)';

            overlay.style.transition = 'opacity 0.5s ease-in-out';
            overlay.style.opacity = '0';

            titulo.style.color = ''; // Restaurar el color original del título
            precio.style.fontWeight = ''; // Restaurar el peso de la fuente original del precio
        });
    });
});

const enlaces = document.querySelectorAll('nav a');

enlaces.forEach(enlace => {
    enlace.addEventListener('mouseenter', function() {
        enlace.style.transition = 'color 0.3s ease-in-out';
        enlace.style.color = '#FF5733'; // Cambiar a un color más impactante, como un rojo fuerte
    });
    enlace.addEventListener('mouseleave', function() {
        enlace.style.color = ''; // Restaurar el color por defecto
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Obtener el enlace del menú correspondiente a la página actual
    const currentPage = window.location.pathname.split('/').pop().split('.')[0];
    const currentLink = document.getElementById(currentPage + '-link');
    
    // Aplicar el estilo deseado al enlace correspondiente
    if (currentLink) {
        currentLink.style.backgroundColor = '#FF5733'; // Color de fondo resaltado
        currentLink.style.color = '#fff'; // Color del texto resaltado
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            // Remover la clase de enlace activo de todos los enlaces
            links.forEach(link => {
                link.classList.remove('active-link');
            });
            
            // Agregar la clase de enlace activo al enlace sobre el que se pasa el cursor
            link.classList.add('active-link');
        });
        
        link.addEventListener('mouseleave', function() {
            // Remover la clase de enlace activo cuando el cursor sale del enlace
            link.classList.remove('active-link');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const enlaces = document.querySelectorAll('nav a');

    enlaces.forEach(enlace => {
        enlace.classList.add('menu-nav'); // Agrega la clase CSS 'menu-nav' al enlace
    });
});
