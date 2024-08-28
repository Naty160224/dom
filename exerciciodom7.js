const campoTexto = document.getElementById('campoTexto');
const botaoExibir = document.getElementById('botaoExibir');
const mensagem = document.getElementById('mensagem');

botaoExibir.addEventListener('click', () => {
    const textoDigitado = campoTexto.value.trim();
    if (textoDigitado) {
        mensagem.textContent = `Você digitou : ${textoDigitado}`;
    } else {
        mensagem.textContent = 'Por favor, digite algo no campo de texto.';
    }
});