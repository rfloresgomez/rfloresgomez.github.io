/**
 * Created by btt_9 on 06/11/2016.
 */
{
    /*Averigua qué método es el más eficiente para manejarse con arrays.  Compruébalo mediante performance.now() o similares
    Introduce 10 elementos en un array mediante push(), unshift(), directamente, fijando tamaño en new Array...
    Eliminar 10 elementos en un array mediante pop(), shift(), directamente, fijando tamaño...*/

    let array1 =[];

    for(let i=0; i<10; i++){
     array1.push(i);
    }
    console.log(array1);

    for(let i=0; i<10; i++){
        array1.pop();
    }
    console.log(array1);
}
