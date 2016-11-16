/**
 * Created by btt_9 on 04/11/2016.
 */
{
    //Indica los tres argumentos del método forEach a un array. Demuestra su uso mediante un ejemplo.
    let automoviles = ["Coche", "Moto"];

    automoviles.forEach(function (elemento, indice, array) {
        //Los 3 argumentos que le pasamos son el elemento que vamos a obtener, el indice de ese elemento y el array en si
        console.log(indice, elemento);
    });
}
