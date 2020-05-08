function teste(x) {
    // variáveis de escopo
    let y = 2;

    if (x > 5) {
        console.log(x, y);
    }
}

teste(10);