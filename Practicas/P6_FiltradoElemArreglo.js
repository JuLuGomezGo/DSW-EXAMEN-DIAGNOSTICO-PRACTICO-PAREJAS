//CREA UN ARREGLO DE NUMEROS Y FILTRA LOS ELMENTOS PARA 
// MOSTRAR SOLO AQUELLOS MAYORES A UN VALOR DADO POR EL USUARIO

function FiltradoElemArreglo() {
    let elemento = document.getElementById("numeroInputP6");
    let res = document.getElementById("resultadoP6");

    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let nFiltrado = elemento.value;
    let numFiltrados = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > nFiltrado) {
            numFiltrados.push(numeros[i]);
        }
    }
    res.innerText = ("Elementos mayores a " + nFiltrado + ":\n" + numFiltrados);

}