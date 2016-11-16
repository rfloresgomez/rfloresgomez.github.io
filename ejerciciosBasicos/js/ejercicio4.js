console.log(comprobarNumeroPrimo(prompt("Dime un número y te diré si es primo o no:"))?"Es primo.":"No es primo.");

function comprobarNumeroPrimo(numero) {
    for(let i=2; i<numero; i++) {
        if(numero === 1) {
            return true;
        }
        if(numero%i === 0){
            return false;
        }
    }
    return true;
}
