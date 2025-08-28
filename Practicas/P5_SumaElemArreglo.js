//CREA UN ARREGLO DE NUMEROS Y CALCULA LA SUMA DE TODOS SUS ELEMENTOS

function sumaElemArreglo() {
 
    let res = document.getElementById("resultadoP5");

    let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    let suma = 0;
    
    for(let i = 0; i < numeros.length; i++){
        suma += numeros[i];
    }
    res.innerText = ("La suma de los elementos: \n" + numeros + "\nEs: " + suma);
    
}
