// Array para armazenar as tarefas
var tarefas = [];

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    var nomeTarefa = document.getElementById('inputTarefa').value;
    if (nomeTarefa.trim() !== '') {
        var novaTarefa = { nome: nomeTarefa, status: 'pendente' };
        tarefas.push(novaTarefa);
        atualizarListaTarefas();
        document.getElementById('inputTarefa').value = '';
    }

    document.getElementById('inputTarefa').focus()
}

// Função para atualizar a lista de tarefas na tela
function atualizarListaTarefas() {
    var listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.innerHTML = '';

    tarefas.forEach(function(tarefa, index) {
        var divTarefa = document.createElement('div');
        divTarefa.classList.add('tarefa');
        
        var spanNomeTarefa = document.createElement('span');
        spanNomeTarefa.textContent = tarefa.nome;
        if (tarefa.status === 'concluida') {
            spanNomeTarefa.classList.add('concluida');
        }
        divTarefa.appendChild(spanNomeTarefa);
        

        var botaoConcluir = document.createElement('button');
        botaoConcluir.textContent = 'Concluir';
        botaoConcluir.onclick = function() {
            concluirTarefa(index);
            atualizarListaTarefas(); // Atualiza a lista após concluir a tarefa
        };
        divTarefa.appendChild(botaoConcluir);

        var botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.onclick = function() {
            removerTarefa(index);
        };
        divTarefa.appendChild(botaoRemover);

        listaTarefas.appendChild(divTarefa);
    });
}


function concluirTarefa(index) {
    tarefas[index].status = 'concluida';
    atualizarListaTarefas();
    document.getElementById('inputTarefa').focus()
}

function removerTarefa(index) {
    tarefas.splice(index, 1);
    atualizarListaTarefas();
    document.getElementById('inputTarefa').focus()
}

document.getElementById('inputTarefa').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('inputTarefa').focus();
});
