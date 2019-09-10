function checaIdade(idade) {
    return new Promise(function(resolve, reject) {
        if(idade >= 18)
            resolve();
        else
            reject();
    });
}

checaIdade(20)
    .then(function() {
        console.log('Maior que 18');
    })
    .catch(function() {
        console.log('Menor que 18');
    });


var listItem = document.createElement('li');
listItem.textContent = 'Carregando...';
var listError = document.createElement('li');
            listError.textContent = 'Usuário não encontrado!';

var btnElement = document.querySelector('.addUser');
btnElement.onclick = function() {
    removeAllChildren().then(function() {
        var listElement = document.querySelector('.repoList')
        listElement.appendChild(listItem);
        var inputElement = document.querySelector('input[name=user]');
        axios.get('https://api.github.com/users/' + inputElement.value + '/repos')
            .then(function(response) {
                listElement.removeChild(listItem);
                for(var repo of response.data) {
                    var repoElement = document.createElement('li');
                    repoElement.textContent = repo.name;
                    repoElement.className = 'list-item';
                    listElement.appendChild(repoElement);
                }
            })
            .catch(function(error) {
                listElement.removeChild(listItem);
                listElement.appendChild(listError);
            });
    });
}

function removeAllChildren() {
    return new Promise(function(response) {
        var listElement = document.querySelector('.repoList')
        var itemsElement = document.querySelectorAll('.list-item');
        for(var individualItem of itemsElement) {
            listElement.removeChild(individualItem);
        }
        response();
    })
}