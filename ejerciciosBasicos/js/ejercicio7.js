{

    let contarCifras = function (numero) {
        numero = numero.split('');
        let longitud = 0;
        for (let i = 0; i < numero.length; i++) {
            if (numero[i] != '.')
                longitud++;
        }
        return 'La longitud del número es ' + longitud;
    }

    let pedirNumeroDecimal = function () {
        let decimal;
        do {
            decimal = prompt("Dime un número: ");
        } while (decimal != parseFloat(decimal) || (decimal < 0 || decimal > 10));
        return decimal;
    }

    let devolverCadenaInvertida = function (numero) {
        return numero.split('').reverse().join('');
    }

    let num = pedirNumeroDecimal();
    console.log(contarCifras(num));
    console.log(devolverCadenaInvertida(num));
}
