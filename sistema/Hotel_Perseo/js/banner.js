// Almacenar caja del banner en una variable
var slider = $('#caja');

// Almacenar variables
var siguiente = $('#btn_siguiente');
var atras = $('#btn_atras');

// Mover última imagen al primer lugar
$('#caja .section_caja:last').insertBefore('#caja .section_caja:first');

// Mostrar la primera imagen con un margen de -100% hacia la izquierda
slider.css('margin-left', '-' + 100 + '%');

// Función para mover las imágenes a la derecha
function moverD() {
    slider.animate({
        marginLeft: '-' + 200 + '%'
    }, 600, function() {
        $('#caja .section_caja:first').insertAfter('#caja .section_caja:last');
        slider.css('margin-left', '-' + 100 + '%');
    });
}

// Función para mover las imágenes a la izquierda
function moverZ() {
    slider.animate({
        marginLeft: 0
    }, 600, function() {
        $('#caja .section_caja:last').insertBefore('#caja .section_caja:first');
        slider.css('margin-left', '-' + 100 + '%');
    });
}

// Función para mover las imágenes automáticamente cada 5 segundos
function autoplay() {
    interval = setInterval(function() {
        moverD();
    }, 6000);
}

// Función para mover las imágenes a la derecha a través de la pulsación del botón
siguiente.on('click', function() {
    moverD();
    clearInterval(interval);
    autoplay();
});

// Función para mover a la izquierda
atras.on('click', function() {
    moverZ();
    clearInterval(interval);
    autoplay();
});

autoplay();
