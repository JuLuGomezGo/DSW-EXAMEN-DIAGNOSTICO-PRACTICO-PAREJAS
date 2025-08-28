//DADA UNA CADENA DE TEXTO Y LUEGO MUESTRA EL NUMERO DE CARACTERES QUE CONTIENE ESA CADENA
function conteoCaracteres() {
    let elemento = document.getElementById("cadenaInput");
    let res = document.getElementById("resultadoP1");

    let cadena = elemento.value;
    let longitud = cadena.length;
    res.innerText = `La cadena de texto "${cadena}" tiene ${longitud} caracteres.`;
}