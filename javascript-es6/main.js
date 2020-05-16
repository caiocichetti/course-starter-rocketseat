const usuario = {
    nome: 'Caio',
    idade: 17,
    endereco: {
        cidade: 'Campinas',
        estado: 'SP'
    },
};

// Desestruturando o objeto
function mostraNome( {nome, idade} ) {
    console.log(nome, idade);
}

mostraNome(usuario);