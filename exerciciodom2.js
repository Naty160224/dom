document.getElementById('calcular').addEventListener('click', function() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const operacao = document.getElementById('operacao').value;
    let resultado;

    if (isNaN(numero1) || isNaN(numero2)) {
        resultado = "Por favor, insira números válidos.";
    } else {
        if (operacao === 'adicao') {
            resultado = numero1 + numero2;
        } else if (operacao === 'subtracao') {
            resultado = numero1 - numero2;
        } else if (operacao === 'multiplicacao') {
            resultado = numero1 * numero2;
        } else if (operacao === 'divisao') {
            if (numero2 === 0) {
                resultado = "Não é possível dividir por zero.";
            } else {
                resultado = numero1 / numero2;
            }
        }
    }
    document.getElementById('resultado').textContent = resultado;
});
