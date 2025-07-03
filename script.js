const botaoPalavra = document.querySelector('#botao-palavrachave');

botaoPalavra.addEventListener('click', mostrarPalavrasChave);

function mostrarPalavrasChave (){
    const texto = document.querySelector('#entrada-de-texto').value; 
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const mostrarPalavrasChave = processaTexto(texto);
    
    campoResultado.textContent = mostrarPalavrasChave.join(", ");
}

function processaTexto(texto){
    let palavras = texto.split(/\s+/);
    return palavras;
}