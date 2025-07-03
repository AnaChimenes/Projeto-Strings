const botaoPalavra = document.querySelector('#botao-palavrachave');

botaoPalavra.addEventListener('click', mostrarPalavrasChave);

function mostrarPalavrasChave (){
    const texto = document.querySelector('#entrada-de-texto').value; 
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const mostrarPalavrasChave = processaTexto(texto);
    
    campoResultado.textContent = mostrarPalavrasChave.join(", ");
}

function processaTexto(texto){
    let palavras = texto.split(/\P{L}+/u);

    contaFrequencias(palavras);
    let frequencias = {};
    for (let i of palavras) {
        frequencias[i] = 0;
        for (let j of palavras) {
            if (i == j) {
                frequencias[i]++;
            }
        }
    }

    console.log(frequencias);
    return palavras;
}

function contaFrequencias(palavras) {

}