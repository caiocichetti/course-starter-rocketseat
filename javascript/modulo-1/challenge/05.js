function arrayRead(users) {
    for (let element of users){
      console.log(`O  ${element.nome} possui as habilidades ${element.habilidades.join(", ")}`);
    }
  }
  
  var usuarios = [
    {
      nome: "Diego",
      habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
      nome: "Gabriel",
      habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
  ];
  
arrayRead(usuarios);