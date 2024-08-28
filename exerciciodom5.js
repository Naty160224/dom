let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
const campoPalpite = document.getElementById('palpite');
const botaoEnviar = document.getElementById('enviarPalpite');
const botaoReiniciar = document.getElementById('reiniciarJogo');
const mensagem = document.getElementById('mensagem');
function verificarPalpite() {
    const palpiteUsuario = Number(campoPalpite.value);
    if (palpiteUsuario === numeroAleatorio) {
        mensagem.textContent = 'Parabéns! Você acertou!';
        mensagem.classList.add('vitoria');
        mensagem.classList.remove('erro');
        fimDeJogo();
    } else if (palpiteUsuario > numeroAleatorio) {
        mensagem.textContent = 'Muito alto! Tente um número menor.';
        mensagem.classList.add('erro');
        mensagem.classList.remove('vitoria');
    } else {
        mensagem.textContent = 'Muito baixo! Tente um número maior.';
        mensagem.classList.add('erro');
        mensagem.classList.remove('vitoria');
    }
    campoPalpite.value = '';
    campoPalpite.focus();
}

function fimDeJogo() {
    campoPalpite.disabled = true;
    botaoEnviar.disabled = true;
    botaoReiniciar.style.display = 'inline';
}

function reiniciarJogo() {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    campoPalpite.disabled = false;
    botaoEnviar.disabled = false;
    mensagem.textContent = '';
    botaoReiniciar.style.display = 'none';
    mensagem.classList.remove('vitoria', 'erro');
    campoPalpite.focus();
}

botaoEnviar.addEventListener('click', verificarPalpite);
botaoReiniciar.addEventListener('click', reiniciarJogo);