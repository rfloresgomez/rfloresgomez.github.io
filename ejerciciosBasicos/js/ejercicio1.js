var numeroCorrecto;
var numeroUsuario;

do{
    jugar();
}while(deseaVolverAJugar());
//crea el numero correcto aleatoriamente
function crearNumeroAleatorio() {
    numeroCorrecto = (Math.random() * 100).toFixed();
}

//comienza el juego
function jugar() {
    crearNumeroAleatorio();
    numeroUsuario = prompt("Introduce un número entero");
    while(numeroUsuario != numeroCorrecto) {
        console.log("El numero es incorrecto. El numero es "+comprobarNumero());
        numeroUsuario = prompt("Introduce un número entero:");
    }
    console.log("HAS ACERTADO!!! El número era el "+numeroCorrecto);

}

//comprueba que el numero sea mayor o menor
function comprobarNumero() {
    if(numeroCorrecto < numeroUsuario){
        return "menor";
    }else{
        return "mayor";
    }
}

//pregunta al usuario si quiere volver a jugar
function deseaVolverAJugar() {
    if(prompt("Quieres volver a jugar? ('s' para volver a jugar)").toLowerCase() === "s"){
        return true;
    }else{
        return false;
    }
}
