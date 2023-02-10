const menorValor = 1;
const maiorValor = 100;

const numeroSecreto = gerarNumAleatorio(menorValor, maiorValor);

function gerarNumAleatorio(menor, maior) {
    return Math.floor(Math.random() * (maior - menor + 1) + menor);
}

console.log('O número secreto é', numeroSecreto);

const elementoMenorValor = document.querySelector('#menor-valor');
const elementoMaiorValor = document.querySelector('#maior-valor');
elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;
