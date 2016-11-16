var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J',
    'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var numero = prompt("Introduce tu número de DNI sin letra.");
var letra;
if(numero < 0 || numero > 99999999) {
    alert("El número proporcionado no es válido");
}else {
    letra = prompt("Introduce la letra de tu DNI.");
    letra = letra.toUpperCase();
    var letraCalculada = letras[numero % 23];
    if(letraCalculada != letra) {
        alert("El número y las letras no coinciden.");
    }
    else {
        alert("Número y letra CORRECTOS!!");
    }
}
