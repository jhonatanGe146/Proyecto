function toggleItem(item) {
    const contBebida = item.querySelector('.cont_bebida');
    const todasLasBebidas = document.querySelectorAll('.cont_bebida');

    // Ocultar todas las bebidas
    todasLasBebidas.forEach(bebida => {
        if (bebida !== contBebida) {
            bebida.style.display = 'none';
        }
    });

    // Alternar la visibilidad de la bebida actual
    if (contBebida.style.display === 'none' || contBebida.style.display === '') {
        contBebida.style.display = 'block';
    } else {
        contBebida.style.display = 'none';
    }
}

// Seleccionar el elemento por defecto al cargar la página
window.addEventListener('DOMContentLoaded', function () {
    const elementoPorDefecto = document.querySelector('.item');
    toggleItem(elementoPorDefecto);
});


function seleccionar(link) {
    // Obtén todos los enlaces del menú
    let links = document.querySelectorAll("header nav a");

    // Elimina la clase "selected" de todos los enlaces
    links.forEach(function (item) {
        item.classList.remove("selected");
    });

    // Agrega la clase "selected" al enlace que se ha hecho clic
    link.classList.add("selected");
}
