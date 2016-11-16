/**
 * Created by btt_9 on 04/11/2016.
 */
{
    //Indica la diferencia entre los siguientes métodos, y demuestra su uso con algunos arrays:
    // Array.prototype.forEach(), Array.prototype.every(), Array.prototype.some() y Array.prototype.filter()

    //Muestra los elementos del array
    let frutas = ["Manzana", "Platano", "Melon", "Sandia", "Melocoton"];
    frutas.forEach(function (elemento, indice, array) {
        console.log(indice, elemento);
    });

    //Comprueba si todos los elementos cumplen la condicion
    function esSuficientementeGrande(elemento, indice, arrreglo) {
        return elemento >= 10;
    }

    console.log([12, 5, 8, 130, 44].every(esSuficientementeGrande));   // false
    console.log([12, 54, 18, 130, 44].every(esSuficientementeGrande)); // true

    //Comprueba si algunos de los elementos cumple la codicion
    function isBiggerThan10(element, index, array) {
        return element > 10;
    }

    console.log([2, 5, 8, 1, 4].some(isBiggerThan10));  // false
    console.log([12, 5, 8, 1, 4].some(isBiggerThan10)); // true

    //Filtra y muestra solo los elementos del array que cumplan la condicion
    function esSuficientementeGrande(elemento) {
        return elemento >= 10;
    }

    var filtrados = [12, 5, 8, 130, 44].filter(esSuficientementeGrande);
    console.log(filtrados);
}
