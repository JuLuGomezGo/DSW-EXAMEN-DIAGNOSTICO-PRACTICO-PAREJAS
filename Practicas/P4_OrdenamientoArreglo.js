// CREA UN ARREGLO DE NUMEROS DESORDENADOS Y LUEGO ORDENALO DE MENOR A MAYOR 
// CON ALGUN ALGORITMO DE ORDENAMIENTO

function ordenarArreglo() {

    let res = document.getElementById("resultadoP4");

    let arregloOrdenar = [37, 12, 45, 8, 23, 56, 1, 19, 44, 33, 27, 9, 15, 60, 3, 48, 11, 35, 29, 52];

    // Algoritmo de ordenamiento selection sort
    function metodoSelectionSort(arreglo) {
        let tam = arreglo.length;

        for (let i = 0; i < tam - 1; i++) {
            let minimo = i;

            for (let j = i + 1; j < tam; j++) {
                if (arreglo[j] < arreglo[minimo]) {

                    minimo = j;
                }
            }

            let temp = arreglo[i];
            arreglo[i] = arreglo[minimo];
            arreglo[minimo] = temp;
        }
    }

    res.innerText = `Arreglo original: [${arregloOrdenar}]`;
    metodoSelectionSort(arregloOrdenar);
    res.innerText += `\nArreglo ordenado: [${arregloOrdenar}]`;
}