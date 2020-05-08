function teste(x) {
    // variáveis de escopo
    let y = 2;

    if (x > 5) {
        let y = 4;

        console.log(x, y);
    }
}

teste(10);