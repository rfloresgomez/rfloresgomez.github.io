/**
 * Created by btt_9 on 04/11/2016.
 */
{
    //Indica la utilidad del operador in con los arrays. Demuestra su uso mediante un ejemplo.
    let frutas = ["Manzana", "Platano", "Melon", "Sandia", "Melocoton"];

    console.log(0 in frutas);//true
    console.log(4 in frutas);//true
    console.log(5 in frutas);//false, No hay elemento en la posicion 5
    console.log("Melon" in frutas);//false, Debemos comprobar si lo contiene por indice, no por el valor
}
