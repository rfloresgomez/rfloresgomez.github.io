{
    let ordenarNumeros = function () {
        let num1 = pedirNumeroEntero();
        let num2 = pedirNumeroEntero();
        let num3 = pedirNumeroEntero();

        if (num1 < num2 && num1 < num3)
            if (num2 < num3)
                return num1 + ', ' + num2 + ', ' + num3;
            else
                return num1 + ', ' + num3 + ', ' + num2;
        else if (num2 < num1 && num2 < num3)
            if (num1 < num3)
                return num2 + ', ' + num1 + ', ' + num3;
            else
                return num2 + ', ' + num3 + ', ' + num1;
        else if (num1 === num2 && num2 < num3)
            return num1 + ', ' + num2 + ', ' + num3;
        else {
            if (num1 < num2)
                return num3 + ', ' + num1 + ', ' + num2;
            else
                return num3 + ', ' + num2 + ', ' + num1;
        }

    }


    let pedirNumeroEntero = function () {
        let entero;
        do {
            entero = prompt("Dime un número: ");
        } while (entero != parseInt(entero).toFixed());
        return parseInt(entero);
    }

    console.log(ordenarNumeros());
}
