var numeros;
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        numeros = numeros + ' ' + i;
    }
}
numeros = numeros.substring(10);
document.getElementById('resultado').innerHTML = numeros;