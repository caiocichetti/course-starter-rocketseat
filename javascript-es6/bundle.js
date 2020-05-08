"use strict";

function teste(x) {
  // variáveis de escopo
  var y = 2;

  if (x > 5) {
    console.log(x, y);
  }
}

teste(10);
