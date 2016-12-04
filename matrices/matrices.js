/**
 * Created by btt_9 on 28/11/2016.
 *
 * Mediante prototype, agrega los métodos sumar, restar, trasponer y multiplicar a la clase ArraysMatematicos. Recuerda que el estado de un array deberían de ser los elementos.
 * Recuerda las restricciones y posibilidades de un Array:
 * Sobre las dimensines de los arrays implicados (unidimensional, bidimensional...)
 * Sobre las longitudes de los arrays implicados (1 en adelante)
 * Sobre los contenidos de los arrays implicados (numéricos)
 * Podemos rellenar un Array con valores aleatorios o directamente desde teclado.
 * Una vez creada la clase, demuestra su funcionamiento en una página bien diseñada. Evita las cajas de texto y hazla lo más dinámica posible.
 */


{
    let matriz1;
    let matriz2;
    let filas;
    let col;
    let matriz1Mostrar;
    let matriz2Mostrar;
    let resultadoOperacion;

    let generarNumerosMatriz = function (filas, col) {
        let matriz = [];
        for (let i = 0; i < filas; i++) {
            matriz[i] = [];
            for (let j = 0; j < col; j++)
                matriz[i].push(parseInt(Math.random() * 10));
        }
        return matriz;
    }

    Matriz.prototype.sumar = function (matriz2) {
        let matrizSuma = new Matriz(this.filas, this.col);
        if ((this.matriz.length !== matriz2.matriz.length) || (this.matriz[0].length !== matriz2.matriz[0].length))
            throw new Exception("Las matrices no tienen la misma dimensión");
        else
            for (let i = 0; i < this.filas; i++)
                for (let j = 0; j < this.col; j++)
                    matrizSuma.matriz[i][j] = this.matriz[i][j] + matriz2.matriz[i][j];
        return matrizSuma;
    }

    Matriz.prototype.restar = function (matriz2) {
        let matrizRestar = new Matriz(this.filas, this.col);
        if ((this.matriz.length !== matriz2.matriz.length) || (this.matriz[0].length !== matriz2.matriz[0].length))
            throw new Exception("Las matrices no tienen la misma dimensión");
        else
            for (let i = 0; i < this.filas; i++)
                for (let j = 0; j < this.col; j++)
                    matrizRestar.matriz[i][j] = this.matriz[i][j] - matriz2.matriz[i][j];
        return matrizRestar;
    }

    Matriz.prototype.trasponer = function () {
        let matrizTranspuesta = new Matriz(this.col, this.filas);
        for (let i = 0; i < this.col; i++)
            for (let j = 0; j < this.filas; j++)
                matrizTranspuesta.matriz[i][j] = this.matriz[j][i];
        return matrizTranspuesta;
    }

    Matriz.prototype.multiplicar = function (matriz2) {
        let matrizMultiplica = new Matriz(this.filas, matriz2.col);
        if (this.col !== matriz2.filas)
            throw new Exception("Es imposible multiplicar las matrices. El número de columnas de la primera matriz debe ser igual al número de filas de la segunda.");
        for (let i = 0; i < this.filas; i++)
            for (let j = 0; j < matriz2.col; j++) {
                matrizMultiplica.matriz[i][j] = 0;
                for (let k = 0; k < this.col; k++)
                    matrizMultiplica.matriz[i][j] += this.matriz[i][k] * matriz2.matriz[k][j];
            }
        return matrizMultiplica;
    }

    Matriz.prototype.mostrar = function () {
        let mensaje = "<table>";
        for (let i = 0; i < this.filas; i++) {
            mensaje += "<tr>";
            for (let j = 0; j < this.col; j++)
                mensaje += "<td>" + this.matriz[i][j] + "</td>";
            mensaje += "</tr>";
        }
        mensaje += "</table>";
        return mensaje;
    }

    function Exception(message) {
        this.message = message;
    }

    function Matriz(filas, col) {
        if (isNaN(filas) || isNaN(col) || filas < 1 || col < 1)
            throw new Exception("el número de filas y columnas debe ser al menos 1");
        this.filas = filas;
        this.col = col;
        this.matriz = generarNumerosMatriz(filas, col);
    }

    let crearMatriz1 = function () {
        try {
            matriz1 = new Matriz(filas.value, col.value);
            matriz1Mostrar.innerHTML = "Matriz 1<br/>" + matriz1.mostrar();
            resultadoOperacion.innerHTML = "";
        } catch (e) {
            resultadoOperacion.innerHTML = "<p class='error'>" + e.message + "</p>";
        }
    }

    let crearMatriz2 = function () {
        try {
            matriz2 = new Matriz(filas.value, col.value);
            matriz2Mostrar.innerHTML = "Matriz 2<br/>" + matriz2.mostrar();
            resultadoOperacion.innerHTML = "";
        } catch (e) {
            resultadoOperacion.innerHTML = "<p class='error'>" + e.message + "</p>";
        }
    }

    let sumarMatricesYMostrar = function () {
        try {
            if (matriz1 === undefined || matriz2 === undefined)
                throw new Exception("Tiene que haber dos matrices.");
            let matrizSuma = matriz1.sumar(matriz2);
            resultadoOperacion.innerHTML = "Suma: " + matrizSuma.mostrar();
        } catch (e) {
            resultadoOperacion.innerHTML = "<p class='error'>" + e.message + "</p>";
        }
    }

    let restarMatricesYMostrar = function () {
        try {
            if (matriz1 === undefined || matriz2 === undefined)
                throw new Exception("Tiene que haber dos matrices.");
            let matrizResta = matriz1.restar(matriz2);
            resultadoOperacion.innerHTML = "Resta: " + matrizResta.mostrar();
        } catch (e) {
            resultadoOperacion.innerHTML = "<p class='error'>" + e.message + "</p>";
        }
    }

    let multiplicarMatricesYMostrar = function () {
        try {
            if (matriz1 === undefined || matriz2 === undefined)
                throw new Exception("Tiene que haber dos matrices.");
            let matrizMultiplicar = matriz1.multiplicar(matriz2);
            resultadoOperacion.innerHTML = "Multiplicación: " + matrizMultiplicar.mostrar();
        } catch (e) {
            resultadoOperacion.innerHTML = "<p class='error'>" + e.message + "</p>";
        }
    }

    let transponerMatrizYMostrar = function () {
        try {
            if (matriz1 === undefined)
                throw new Exception("Tiene que existir la matriz");
            let matrizTranspuesta = matriz1.trasponer();
            resultadoOperacion.innerHTML = "Transpuesta: " + matrizTranspuesta.mostrar();
        } catch (e) {
            resultadoOperacion.innerHTML = "<p class='error'>" + e.message + "</p>";
        }
    }

    let transponerMatriz2YMostrar = function () {
        try {
            if (matriz2 === undefined)
                throw new Exception("Tiene que existir la matriz");
            let matrizTranspuesta = matriz2.trasponer();
            resultadoOperacion.innerHTML = "Matriz Transpuesta: " + matrizTranspuesta.mostrar();
        } catch (e) {
            resultadoOperacion.innerHTML = "<p class='error'>" + e.message + "</p>";
        }
    }

    let init = function () {
        let botonCrearMatriz = document.getElementById("crear");
        let botonCrearMatriz2 = document.getElementById("crear2");
        let botonSumar = document.getElementById("sumar");
        let botonRestar = document.getElementById("restar");
        let botonMultiplicar = document.getElementById("multiplicar");
        let botonTransponer = document.getElementById("transponer");
        let botonTransponer2 = document.getElementById("transponer2");
        filas = document.getElementById("filas");
        col = document.getElementById("col");
        matriz1Mostrar = document.getElementById("matriz1Mostrar");
        matriz2Mostrar = document.getElementById("matriz2Mostrar");
        resultadoOperacion = document.getElementById("resultado");
        botonCrearMatriz.addEventListener("click", crearMatriz1);
        botonCrearMatriz2.addEventListener("click", crearMatriz2);
        botonSumar.addEventListener("click", sumarMatricesYMostrar);
        botonRestar.addEventListener("click", restarMatricesYMostrar);
        botonMultiplicar.addEventListener("click", multiplicarMatricesYMostrar);
        botonTransponer.addEventListener("click", transponerMatrizYMostrar);
        botonTransponer2.addEventListener("click", transponerMatriz2YMostrar);
    }

    window.onload = init;
}
