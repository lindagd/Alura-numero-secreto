function checaValorDoChute(chute) {
    const numero = +chute;
    console.log(numero);

    if(naoEhNumero(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido</div>`;
    }
    else if (numForaDoRange(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido. Escolha um número entre ${menorValor} e ${maiorValor}</div>`;
    }
    else {
        avaliaChute(numero);
    }
}

function naoEhNumero(valor) {
    return Number.isNaN(valor);
}

function numForaDoRange(numero) {
    return numero < menorValor || numero > maiorValor;
}

function avaliaChute(numero) {
    if(numero < numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-angle-up"></i></div>`;
    }
    else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-angle-down"></i></div>`;
    }
    else {
        document.body.innerHTML = `
            <h1>Você acertou!</h1>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
    }
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})