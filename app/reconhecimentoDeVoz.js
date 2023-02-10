const elementoChute = document.querySelector('#chute');


window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    let chute = e.results[0][0].transcript.replace(".", "");
    //console.log(chute);
    chute = corrigeNumeros(chute);

    exibeChuteNaTela(chute);
    checaValorDoChute(chute);
    
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `;
}

recognition.addEventListener('end', () => recognition.start())