const button = document.getElementById('submit').addEventListener('click',(e) => {
    
    const fechaInicio = document.getElementById("fecha-inicio").value;
    const fechaFinal = document.getElementById("fecha-final").value;
    
    // definir las fechas
    var fecha1 = new Date(fechaInicio);
    var fecha2 = new Date(fechaFinal);

    // calcular la diferencia en milisegundos
    var diferencia = fecha2.getTime() - fecha1.getTime();

    // agregar 1 día al resultado anterior
    var diferenciaT = diferencia += 1;

    // convertir la diferencia de milisegundos a días
    var dias = Math.ceil(diferenciaT / (1000 * 60 * 60 * 24));

    // imprimir el resultado
    console.log(dias + ' días seleccionados.');

    const comidasPeruanas = [
        'Ceviche', 
        'Lomo saltado', 
        'Aji de gallina', 
        'Papa a la huancaína', 
        'Arroz con pollo', 
        'Tacu tacu', 
        'Anticuchos', 
        'Causa rellena', 
        'Chaufa de pollo', 
        'Seco de cordero', 
        'Rocoto relleno', 
        'Adobo de cerdo', 
        'Chicharrón', 
        'Pescado a la chorrillana', 
        'Pachamanca', 
        'Tallarines verdes', 
        'Estofado de pollo', 
        'Arroz con mariscos', 
        'Picante de cuy', 
        'Caldo de gallina'
    ];

    const inputCantidad = dias;
    const cantidad = parseInt(inputCantidad);

    function seleccionarComidasAleatorias(array, cantidad) {
    const comidasSeleccionadas = [];
    for (let i = 0; i < cantidad; i++) {
        const indiceAleatorio = Math.floor(Math.random() * array.length);
        comidasSeleccionadas.push(array[indiceAleatorio]);
    }
    return comidasSeleccionadas;
    }

const comidasAleatorias = seleccionarComidasAleatorias(comidasPeruanas, cantidad);
console.log(comidasAleatorias);
});
