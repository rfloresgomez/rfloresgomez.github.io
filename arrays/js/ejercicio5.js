/**
 * Created by btt_9 on 04/11/2016.
 */
{
    //Crea  una función que devuelva un array con cada uno de los argumentos.

    let arrayArgumentos = function () {
        let array = [];
        for (let i=0; i<arguments.length; i++)
            array[i]=arguments[i];

        return array;
    }

    console.log(arrayArgumentos("Hola", "soy", "Roberto"));
}