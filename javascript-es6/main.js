class List {
    // primeiro elemento a ser executado quando um objeto for instanciado
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

// utilizando herança
class TodoList extends List {
    constructor() {
        //chamando o constructor da classe pai
        super();

        this.usuario = 'Caio';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();