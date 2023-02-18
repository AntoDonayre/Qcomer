const button = document.getElementById('submit')
let botonHabilitado = true;

button.addEventListener('click',(e) => {    
    
    if (botonHabilitado) {
        botonHabilitado = false;

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
        'Lomo saltado', 
        'Papa a la huancaina', 
        'Aji de gallina', 
        'Arroz chaufa', 
        'Arroz con pollo', 
        'Seco de pollo', 
        'Papa rellena',
        'Causa rellena',
        'Tallarines en salsa roja',
        'frejoles',
        'Puré de papa',
        'Arverjita partida',
        'Pollo a la Olla',
    ];

    function seleccionarComidasAleatorias(array, dias) {
    const comidasSeleccionadas = [];
    for (let i = 0; i < dias; i++) {
        const indiceAleatorio = Math.floor(Math.random() * array.length);
        comidasSeleccionadas.push(array[indiceAleatorio]);
    }
    return comidasSeleccionadas;
    }

    const comidasAleatorias = seleccionarComidasAleatorias(comidasPeruanas, dias);
    console.log(comidasAleatorias);

    for (let i = 0; i < comidasAleatorias.length; i+=1) {
        const elemento = (comidasAleatorias[i]);

        const divHijo = document.createElement("div");
        divHijo.setAttribute("class", "menu");
        divHijo.setAttribute("id", "menuElemento");
        divHijo.textContent = elemento;
        const divPadre = document.getElementById("listas-semanas");
        divPadre.appendChild(divHijo);
    } 
    
    setTimeout(function() {
        botonHabilitado = true;
    }, 3000);
}
});

// Obtener el botón de reinicio
const resetBtn = document.getElementById("resetBtn");

// Agregar un evento de clic al botón de reinicio
resetBtn.addEventListener("click", function() {
  // Obtener los elementos de formulario por su ID y reiniciar sus valores
  document.querySelectorAll("#menuElemento").forEach(function(elementReset){
    elementReset.remove();
  });
});