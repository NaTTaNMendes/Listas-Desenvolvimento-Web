var qtd = prompt('Quantos nomes deseja coletar?');
qtd = parseInt(qtd);

var nomes = [];
for (var i = 1; i <= qtd; i++) {
    let nome = prompt('Informe o ' + i + 'º nome:');
    nomes.push(nome);
}

nomes = nomes.sort();
nomes = nomes.reverse();

document.getElementById('resultado').innerHTML = nomes;