var posClick;

document.addEventListener('click', posicao, true);
function posicao(e) {
    posClick = e.pageX + ', ' + e.pageY;
    document.getElementById('resultado').innerHTML = posClick;
}