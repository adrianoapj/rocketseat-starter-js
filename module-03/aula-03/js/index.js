var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

var tarefas = [
    'Fazer café',
    'Estudar JavaScript',
    'Acessar comunidade da Rocketseat'
];

function renderTarefas() {
    listElement.innerHTML = '';

    for(tarefa of tarefas) {
        var tarefaElement = document.createElement('li');
        var tarefaText = document.createTextNode(tarefa);

        tarefaElement.appendChild(tarefaText);
        listElement.appendChild(tarefaElement);
    }
}

renderTarefas();

function adicionarTarefa() {
    var tarefaText = inputElement.nodeValue;
    
    tarefas.push(tarefaText);
    inputElement.value = '';
    renderTarefas();
}

btnElement.onclick = adicionarTarefa;