'use strict';

let user = 0;
let usersAttempts = 0;
const usersCount = [];
const usersArr = [];
let usersNum;
let count = 0;

const minAndMax = () => {
  usersNum = prompt('Введите одно из чисел диапазона:');
  count++;

  if (usersNum === null) {
    usersArr.length = 0;
    return;
  }

  if (Number.isNaN(+usersNum)) {
    alert('Введите число');
    return minAndMax();
  }

  usersArr.push(usersNum);
  if (count >= 2) {
    return usersArr;
  }
  return minAndMax();
};

minAndMax();

const min = Math.min(...usersArr);
const max = Math.max(...usersArr);

const allAttempts = Math.floor((max - min + 1) * 0.3);
const bot = Math.floor(Math.random() * (max - min + 1)) + min;

const game = () => {
  user = prompt(`Введите число от ${min} до ${max}:`);
  if (+user === bot || usersAttempts >= allAttempts || user === null) {
    return user;
  }
  switch (true) {
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
    case +user === bot:
      alert('Правильно');
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

if (usersArr.length === 2) {
  game();
}


if (+user === bot) {
  alert(`Вы угадали число ${bot} за ${usersAttempts} попыток!`);
} else if (usersAttempts === allAttempts) {
  alert(`Ваши попытки закончились, загаданное число было ${bot}.`);
} else {
  alert('Вы вышли из игры');
}
