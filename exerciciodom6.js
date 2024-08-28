const primeiraDiv = document.getElementById('primeiraDiv');
        const segundaDiv = document.getElementById('segundaDiv');
        const terceiraDiv = document.getElementById('terceiraDiv');
        const botaoTrocar = document.getElementById('botaoTrocar');

        botaoTrocar.addEventListener('click', () => {
            primeiraDiv.classList.add('novaCor1'); // Adiciona nova classe
            segundaDiv.classList.remove('div2');   // Remove a classe existente
            terceiraDiv.classList.toggle('novaCor3'); // Alterna a classe
        });