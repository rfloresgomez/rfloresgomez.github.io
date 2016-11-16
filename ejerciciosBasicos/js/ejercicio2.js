var numeros = '';
var x = 0;
for(let i = 100; i>=0; i--){
    x++;
    numeros += i+', ';
    if(x%7 === 0){
        console.log(numeros);
        var numeros = '';
    }
}
console.log(numeros);
