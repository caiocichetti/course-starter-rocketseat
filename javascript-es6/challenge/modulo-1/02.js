const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// 2.1 Pega a idade de todos usuarios
const idades = usuarios.map(usuario => usuario.idade);
console.log(idades); // [ 23, 15, 30 ]

// 2.2 Pega somente os usuarios que trabalham na Rocketseat com idade > 18
const rocketseat18 = usuarios.filter(
    usuario => usuario.empresa === "Rocketseat" && usuario.idade >= 18
); 

console.log(rocketseat18); // [ { nome: 'Diego', idade: 23, empresa: 'Rocketseat' } ]

// 2.3 Procura por um usuário que trabalhe na empresa Google
const google = usuarios.find(usuario => usuario.empresa === "Google");
console.log(google); // undefined

// 2.4 Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
// no máximo 50 anos
const calculo = usuarios
  .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter(usuario => usuario.idade <= 50);

console.log(calculo); // [ { nome: 'Diego', idade: 46, empresa: 'Rocketseat' }, 
                        // { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' }]