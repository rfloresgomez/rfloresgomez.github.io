var valores = [true, 5, false, "hola", "adios", 2];
// Cual de los 2 elementos de texto es mayor
// Si el resultado es true, el primer texto es mayor
var resultado = valores[3] > valores[4];
alert(resultado);
// Combinar valores booleanos
var valor1 = valores[0];
var valor2 = valores[2];
// Obtener un resultado TRUE
var resultado = valor1 || valor2;
alert('true || false: '+resultado);
// Obtener un resultado FALSE
resultado = valor1 && valor2;
alert('true && false: '+resultado);
// Operaciones matemáticas
var num1 = valores[1];
var num2 = valores[5];
var suma = num1 + num2;
alert('5+2: '+suma);
var resta = num1 - num2;
alert('5-2: '+resta);
var multiplicacion = num1 * num2;
alert('5*2: '+multiplicacion);
var division = num1 / num2;
alert('5/2: '+division);
var modulo = num1 % num2;
alert('5%2: '+modulo);