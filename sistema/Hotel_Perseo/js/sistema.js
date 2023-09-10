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
