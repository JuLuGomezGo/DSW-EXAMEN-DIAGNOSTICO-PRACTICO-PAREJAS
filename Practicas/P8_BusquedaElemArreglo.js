//CREA UN ARREGLO DE NOMBRES Y DADA UNA CADENA CON UN NOMBRE, VERIFICA SI ESE NOMBRE 
// ESTA PRESENTE EN EL ARREGLO Y MUESTRA UN MENSAJE APROPIADO

function BusquedaElemArreglo() {
    let elemento = document.getElementById("elementoInputP8");
    let res = document.getElementById("resultadoP8");

    let nombres = ["Ana", "Luis", "Carlos", "Marta", "Sofía", "Jorge", "Lucía", "Miguel", "Elena", "Pedro"];
    let nombreBuscado = elemento.value;

    function buscarNombre(arreglo, nombre) {
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i].toLowerCase() === nombre.toLowerCase()) {
                return true;
            }
        }
        return false;
    }

    if (buscarNombre(nombres, nombreBuscado)) {
        res.innerText = (`El nombre "${nombreBuscado}" está presente en el arreglo.`);
    } else {
        res.innerText = (`No se encontró a "${nombreBuscado}" en el arreglo.`);
    }
}