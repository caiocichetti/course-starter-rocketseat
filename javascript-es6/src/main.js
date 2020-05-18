const minhaPromisse = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

// minhaPromisse().then(response => ...);

// async function executaPromisse() {
// 	 console.log(await minhaPromisse());
// 	 console.log(await minhaPromisse());
// 	 console.log(await minhaPromisse());
// }

const executaPromisse = async() => {
	console.log(await minhaPromisse());
	console.log(await minhaPromisse());
	console.log(await minhaPromisse());
};

executaPromisse();