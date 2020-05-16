// 5.1 A Rest
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

// 5.1 B
function soma(...nums) {
    return nums.reduce((a, b) => a + b);
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

// 5.2 Spread
const usuario = {
        nome: 'Diego',
        idade: 23,
        endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};
   
usuario2 = { ...usuario, nome: 'Gabriel'};
console.log(usuario2);

usuario3 = { 
    ...usuario,
    endereco: { ...usuario.endereco, cidade: 'Lontras' }
};
console.log(usuario3);