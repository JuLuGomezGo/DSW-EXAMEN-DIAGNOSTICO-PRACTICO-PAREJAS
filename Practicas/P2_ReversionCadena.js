//DADA UNA FRASE Y LUEGO MUESTRA LA FRASE PERO CON LAS PALABRAS EN ORDEN INVERSO

function reversionCadena() {

    let elemento = document.getElementById("cadenaInputP2");
    let res = document.getElementById("resultadoP2");

    let frase = elemento.value;
    let palabras = frase.split(" ");
    let fraseInvertida = palabras.reverse().join(" ");
    
    res.innerText = `La frase "${frase}" invertida es: "${fraseInvertida}"`;

}