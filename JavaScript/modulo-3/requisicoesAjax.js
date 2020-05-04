// Requisões AJAX
var xhr = new XMLHttpRequest();

// buscando dados da api do github
xhr.open('GET', 'https://api.github.com/users/caiocichetti')
xhr.send(null);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}