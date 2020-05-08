"use strict";

function teste(x) {
  // variáveis de escopo
  var y = 2;

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }
}

teste(10);
