"use strict";

var arr = [1, 3, 4, 5, 8, 9];
var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); // [1, 4, 6, 8, 12, 14]

var sum = arr.reduce(function (total, next) {
  return total + next; // 0
  // 1
  // 1
  // 3
  // 4
  // 4
});
console.log(sum); // 30

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); // [4, 8]

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find); // 4
