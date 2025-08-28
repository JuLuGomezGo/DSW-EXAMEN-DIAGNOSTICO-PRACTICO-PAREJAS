//DADA UNA PALABRA, DETERMINAR SI ES UN PALINDROMO

function palindromo() {

    let elemento = document.getElementById("palabraInputP3");
    let res = document.getElementById("resultadoP3");

    let palabra = elemento.value.toLowerCase().replace(/\s+/g, '');
    let palabraInvertida = '';


    for (let i = palabra.length - 1; i >= 0; i--) {
        palabraInvertida += palabra[i];
    }

    if (palabra === palabraInvertida) {
        res.innerText = `"${palabra}" es un palíndromo.`;
    } else {
        res.innerText = `"${palabra}" no es un palíndromo.`;
    }
}