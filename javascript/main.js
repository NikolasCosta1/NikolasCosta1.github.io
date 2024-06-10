function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.style.display = 'none';
}

var data = [
    { nome: 'Nikolas', email: 'nikolas@gmail.com', dataNascimento: '11-06-2004' },
    { nome: 'Matheus', email: 'matheus@gmail.com', dataNascimento: '17-02-2005' },
    { nome: 'Lucas', email: 'lucas@gmail.com', dataNascimento: '1988-12-30' }
];

function tabela() {
    var tbody = document.querySelector('#lista tbody');
    data.forEach(function(item) {
        var row = document.createElement('tr');
        row.innerHTML = `<td>${item.nome}</td><td>${item.email}</td><td>${item.dataNascimento}</td><td><button onclick="deleteRow(this)">Deletar</button></td>`;
        tbody.appendChild(row);
    });
}

tabela();


function api() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        document.getElementById('api-result').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => console.error('Erro ao obter dados da API:', error));
}


function showDiv(divNumber) {
    for (var i = 1; i <= 3; i++) {
        var div = document.getElementById('div' + i);
        if (i === divNumber) {
            div.classList.remove('hidden');
        } else {
            div.classList.add('hidden');
        }
    }
}
