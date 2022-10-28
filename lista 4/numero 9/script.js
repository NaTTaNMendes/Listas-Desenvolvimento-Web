function inverteCor() {
    if (document.getElementById('fundo').style.backgroundColor == 'white') {
        document.getElementById('fundo').style.backgroundColor = 'black';
        document.getElementById('header1').style.color = 'cyan';
        document.getElementById('header2').style.color = 'yellow';
        document.getElementById('header3').style.color = 'green';   
    } else {
        document.getElementById('fundo').style.backgroundColor = 'white';
        document.getElementById('header1').style.color = 'black';
        document.getElementById('header2').style.color = 'black';
        document.getElementById('header3').style.color = 'black';  
    }       
}