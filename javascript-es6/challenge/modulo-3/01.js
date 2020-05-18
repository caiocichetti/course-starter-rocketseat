/* Para rodar todas resoluções abaixo necessita que você esteja com o plugin do Async/Await do Babel e o
babel-polyfill devidamente configurados. Em alguns exercícios é necessário instalar o Axios. */

// A
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
	 await delay();
	 console.log('1s');

	 await delay();
	 console.log('2s');

	 await delay();
	 console.log('3s');
}

umPorSegundo();

// B
import axios from 'axios';

async function getUserFromGithub(user) {
	try {
		const response = await axios.get(`https://api.github.com/users/${user}`);
		console.log(response.data);
	} catch (err) {
		console.warn('Usuário não existe!');
	}
}

getUserFromGithub('caiocichetti');
getUserFromGithub('caiocichett');

// C
class Github {
	static async getRepositories(repo) {
		try {
			const response = await axios.get(`https://api.github.com/repos/${repo}`)
			console.log(response.data);
		} catch (err) {
			console.warn('Repositório não existe!');
		}
	}
}

Github.getRepositories('caiocichetti/be-the-hero')
Github.getRepositories("rocketseat/rocketseat.com.br");

// D
const buscaUsuario = async usuario => {
	try {
		const response = await axios.get(`https://api.github.com/users/${usuario}`)
		console.log(response.data)
	} catch (err) {
		console.log('Usuário não existe!')
	}
}

buscaUsuario('diego3g');
