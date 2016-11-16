{
    let escribirNumerosPrimos = function() {
        let mensaje = '';
        let contador;
        let numero = pedirNumeroEntero();
        if (numero === 1) {
            return console.log(1);
        }
        for (let i = 2; i < numero; i++) {
            contador = 0;
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    contador++;
                }
            }
            if(contador === 0) {
                mensaje += i+' ';
            }
        }
        return mensaje;
    }

    let pedirNumeroEntero = function () {
        let entero;
        do {
            entero = prompt("Dime un número: ");
        } while (entero != parseInt(entero).toFixed());
        return entero;
    }

    console.log(escribirNumerosPrimos());
}