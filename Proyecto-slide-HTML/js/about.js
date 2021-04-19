const fila = document.querySelector('.contenedor-carousel');
const marcas = document.querySelectorAll('.marcas');
const flechaIzq = document.getElementById('flecha-izq');
const flechaDer = document.getElementById('flecha-der');

// ? Event Listener para la flecha derecha
flechaDer.addEventListener('click', () => {
fila.scrollLeft += fila.offsetWidth;
    //crea cosnt para buscar el elemento activo a la derecha
    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.nextSibling){    //si tiene un elemento activo a la aderecha
        indicadorActivo.nextSibling.classList.add('activo'); //anade el elemento activo y remueve del anterior
        indicadorActivo.classList.remove('activo');
    }
});

// ? Event Listener para la flecha izq
flechaIzq.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
    //crea cosnt para buscar el elemento activo a la derecha
    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.previousSibling){    //si tiene un elemento activo a la aderecha
        indicadorActivo.previousSibling.classList.add('activo'); //anade el elemento activo y remueve del anterior
        indicadorActivo.classList.remove('activo');
    }

    });

    // Paginacion
    // calcular cuantas paginas se tendramm
    
const numeroPaginas = Math.ceil(marcas.length / 5); //calcula las img dentro del carousel ///para que sean solo 3
for(let i = 0; i < numeroPaginas; i++){
    //crear un boton para cada imagen
    const indicador = document.createElement('button');    //colocar cada boton en esta parte del html
    if(i === 0){
        indicador.classList.add('activo');
    }
    document.querySelector('.indicadores').appendChild(indicador);
    //hace el calculo para al precionar el indicador se mueva hasta ese punto
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

     //hace que el indicador se quede activo donde este y elimine donde no esta el active
        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}
/** agregar el Hover a cada imagen cada que pasemos sobre ella con un delay */
marcas.forEach((marca) => {
    marca.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            marcas.forEach(marca => marca.classList.remove('hover'));
            elemento.classList.add('hover')
        }, 300);
    });
});


fila.addEventListener('mouseleave', () => {
    marcas.forEach(marca => marca.classList.remove('hover'));
} );