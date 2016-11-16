/**
 * Created by btt_9 on 04/11/2016.
 */
{
    //Crea una función que elimine todos los undefined de un array.

    let frutas = ["Manzana", undefined, "Platano", "Melon", undefined, "Sandia", "Melocoton"];
    console.log(frutas);

    let quitarUndefined = function(){
        for(let i=0; i<frutas.length; i++){
            if(frutas[i]==undefined)
                frutas.splice(i, 1);
        }
    }

    quitarUndefined();
    console.log(frutas);
}