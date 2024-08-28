document.addEventListener('DOMContentLoaded', carregarTarefas);
document.getElementById('adicionarTarefa').addEventListener('click', adicionarTarefa);

function adicionarTarefa() {
    const textoTarefa = document.getElementById('novaTarefa').value.trim();
    if (textoTarefa !== '') {
        const li = document.createElement('li');
        li.textContent = textoTarefa;

        li.addEventListener('click', () => {
            li.classList.toggle('concluida');
            salvarTarefas();
        });

        li.addEventListener('dblclick', () => {
            li.remove();
            salvarTarefas();
        });

        document.getElementById('listaTarefas').appendChild(li);
        salvarTarefas();

        document.getElementById('novaTarefa').value = '';
    }
}

function salvarTarefas() {
    const tarefas = [];
    document.querySelectorAll('#listaTarefas li').forEach(tarefa => {
        tarefas.push({
            texto: tarefa.textContent,
            concluida: tarefa.classList.contains('concluida')
        });
    });
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function carregarTarefas() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.forEach(tarefa => {
        const li = document.createElement('li');
        li.textContent = tarefa.texto;
        if (tarefa.concluida) {
            li.classList.add('concluida');
        }

        li.addEventListener('click', () => {
            li.classList.toggle('concluida');
            salvarTarefas();
        });

        li.addEventListener('dblclick', () => {
            li.remove();
            salvarTarefas();
        });

        document.getElementById('listaTarefas').appendChild(li);
    });
}
