"use strict";

var usuario = {
  nome: 'Caio',
  idade: 17,
  endereco: {
    cidade: 'Campinas',
    estado: 'SP'
  }
}; // Desestruturando o objeto

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
