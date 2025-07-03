const botaoPalavra = document.querySelector('#botao-palavrachave');

botaoPalavra.addEventListener('click', mostrarPalavrasChave);

function mostrarPalavrasChave (){
    const texto = document.querySelector('#entrada-de-texto').value; 
    const campoResultado = document.querySelector('#resultado-palavrachave');

    campoResultado.textContent = texto;
}