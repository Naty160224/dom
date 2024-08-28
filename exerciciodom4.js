const miniaturas = document.querySelectorAll('.galeria img');
const imagemDestaque = document.getElementById('imagemDestaque');

miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', () => {
        const imagemCompleta = miniatura.getAttribute('data-imagem');
        imagemDestaque.src = imagemCompleta;
        imagemDestaque.alt = miniatura.alt;
    });
});