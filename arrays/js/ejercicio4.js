/**
 * Created by btt_9 on 04/11/2016.
 */
{
    //Crea  una función que cree un array de la dimensión indicada, cuyo contenido sean los números naturales comenzando desde 0
    let array = [];
    let dimension;

    let pedirDimension = function () {
        do {
            dimension = prompt("Dime la dimensión del Array");
        } while (isNaN(dimension) || Number(parseInt(dimension)) <= 0);
    }

    let inicializarArray = function () {
        for (let i = 0; i < dimension; i++) {
            array[i] = i;
        }
    }

    let mostrarArray = function () {
        array.forEach(function (elemento) {
            console.log(elemento);
        });
    }

    pedirDimension();
    inicializarArray();
    mostrarArray();
}