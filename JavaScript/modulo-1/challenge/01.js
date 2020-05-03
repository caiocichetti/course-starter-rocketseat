function objectRead(obj) {
    return `O usuário mora em ${obj.cidade} / ${obj.numero}, no bairro ${obj.bairro}, na rua "${obj.rua}" com nº ${obj.numero}.`
  }

  var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
  };

  console.log(objectRead(endereco));