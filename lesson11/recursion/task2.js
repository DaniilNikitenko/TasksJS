'use strict';

const sumArr = (arr) => {
  const sum = arr.reduce((count, item) => count + item);
  return sum;
};

const generator = (arr) => {
  const newArr = arr;
  newArr.push(Math.floor(Math.random() * 11 + 1));
  if (sumArr(newArr) <= 50) {
    generator(newArr);
  }
  return newArr;
};

console.log(generator([0]));
