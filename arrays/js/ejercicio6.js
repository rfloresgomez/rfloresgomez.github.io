/**
 * Created by btt_9 on 04/11/2016.
 */
{
    //Crea  una función que devuelva un array con cada uno de los argumentos.
    //En caso de que alguno de sus argumentos sea un array, que introduzca sus elementos uno a uno.

    let arrayArgumentos = function () {
        let array = [];
        for (let i=0; i<arguments.length; i++) {
            if(Array.isArray(arguments[i])){
                let array2 = arguments[i];
                for(let x=0; x<array2.length; x++)
                    array.push(array2[x]);
            }else
                array.push(arguments[i]);
        }

        return array;
    }

    let nombre = ["Roberto ", "Carlos ", "Flores ", "Gómez"];
    console.log(arrayArgumentos("Hola ", "soy ", nombre));
}
