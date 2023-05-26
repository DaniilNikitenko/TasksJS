'use strict';

let user = 0;
let usersAttempts = 1;
const usersCount = [];
let usersNum;
let min;
let max;
let allAttempts;
let bot;

const minAndMax = (arr) => {
  usersNum = prompt('Введите одно из чисел диапазона:');

  if (usersNum === null) {
    arr.length = 0;
    return [];
  }

  if (Number.isNaN(+usersNum)) {
    alert('Введите число');
    return minAndMax(arr);
  }

  arr.push(usersNum);
  if (arr.length >= 2) {
    return arr;
  }
  return minAndMax(arr);
};

const game = () => {
  user = prompt(`Введите число от ${min} до ${max}:`);
  switch (true) {
    case +user === bot:
    case usersAttempts >= allAttempts:
    case user === null:
      return user;
    case isNaN(user):
    case +user < min:
    case +user > max:
      alert('Введите Корректное число');
      return game();
    case +user > bot:
      alert('Меньше!');
      break;
    case +user < bot:
      alert('Больше!');
      break;
  }

  if (usersCount.includes(user)) {
    alert('Это число вы уже вводили!');
    return game();
  }

  usersCount.push(user);
  usersAttempts++;
  return game();
};

const usersArr = minAndMax([]);

if (usersArr.length === 2) {
  min = Math.min(...usersArr);
  max = Math.max(...usersArr);

  allAttempts = Math.floor((max - min + 1) * 0.3);
  bot = Math.floor(Math.random() * (max - min + 1)) + min;
  game();
}

if (+user === bot) {
  alert(`Вы угадали число ${bot} за ${usersAttempts} попыток!`);
} else if (usersAttempts === allAttempts) {
  alert(`Ваши попытки закончились, загаданное число было ${bot}.`);
} else {
  alert('Вы вышли из игры');
}
