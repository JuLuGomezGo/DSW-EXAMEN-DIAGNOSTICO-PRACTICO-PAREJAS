//CREA DOS ARREGLOS DE STRINGS Y LUEGO CONCATENALOS EN UN SOLO ARREGLO

function ConcatenacionArreglos() {

    let res = document.getElementById("resultadoP7");

    let frutas = ["fresa", "banana", "naranja", "uva", "manzana"];
    let verduras = ["lechuga", "tomate", "pepino", "zanahoria", "espinaca"];

    res.innerText = ("Frutas: \n" + frutas);
    res.innerText += ("\nVerduras: \n" + verduras);

    let alimentos = verduras.concat(frutas);
    res.innerText += ("\nFrutas y Verduras: \n" + alimentos);
}