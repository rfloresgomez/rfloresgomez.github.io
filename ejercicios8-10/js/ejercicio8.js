var numero = prompt("Introduce un número entero");
alert("El número " + numero + " es " + ((esPar(numero)) ? "par" : "impar"));//? si es true y : si es false
function esPar(numero) {
    if (numero % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
