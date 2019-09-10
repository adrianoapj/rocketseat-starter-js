var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

var tarefas = JSON.parse(localStorage.getItem('tasks_list')) || [];

function renderTarefas() {
    listElement.innerHTML = '';

    for(tarefa of tarefas) {
        var tarefaElement = document.createElement('li');
        var tarefaText = document.createTextNode(tarefa);

        var linkElement = document.createElement('a');

        var pos = tarefas.indexOf(tarefa);
        linkElement.setAttribute('onclick', 'deletarTarefa(' + pos + ')');

        var linkText = document.createTextNode('Excluir tarefa');

        linkElement.appendChild(linkText);
        linkElement.setAttribute('href', 'javascript:void(0)');

        tarefaElement.appendChild(tarefaText);
        listElement.appendChild(tarefaElement);
        tarefaElement.appendChild(linkElement);
    }
}

renderTarefas();

function adicionarTarefa() {
    var tarefaText = inputElement.value;
    
    tarefas.push(tarefaText);
    inputElement.value = '';
    renderTarefas();
    salvarInfo();
}

btnElement.onclick = adicionarTarefa;

function deletarTarefa(pos) {
    tarefas.splice(pos, 1);
    renderTarefas();
    salvarInfo();
}

function salvarInfo() {
    localStorage.setItem('tasks_list', JSON.stringify(tarefas));
}
