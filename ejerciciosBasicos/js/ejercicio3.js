var resultado= "";

function pedirNumero() {
    comprobarNumero(prompt("Dime un número, te diré si es o no míltiplo de 5:"));
}

function comprobarNumero(numero){
    if(numero%5 === 0){
        resultado += numero+" es múltiplo de 5.\n";
    }
}
for(let i=0; i<=7; i++){
    pedirNumero();
}
console.log(resultado);
