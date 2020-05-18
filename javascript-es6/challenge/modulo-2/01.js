/* Para rodar todas resoluções abaixo necessita que você esteja com o Webpack configurado */

// 1.1
import ClasseUsuario from "./functions";

ClasseUsuario.info();

// 1.2
import { idade } from "./functions";

console.log(idade);

// 1.3
import Usuario, { idade as IdadeUsuario } from "./functions";