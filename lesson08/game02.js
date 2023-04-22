let usersArr = [];
let usersNum;
for (let i = 0; i < 2; ) {
  usersNum = prompt("Введите одно из чисел диапазона:");

  if (usersNum === null) {
    usersArr = [];
    break;
  }

  usersNum = +usersNum;

  if (Number.isNaN(usersNum)) {
    alert("Введите число");
    continue;
  }

  usersArr.push(usersNum);
  i++;
}

let min = Math.min(...usersArr);
let max = Math.max(...usersArr);

let range = max - min + 1;
let allAttempts = Math.floor(range * 0.3);

let bot = Math.floor(Math.random() * range) + min;
let user;
let usersAttempts = 0;
const usersCount = [];

while (user !== bot && usersAttempts < allAttempts) {
  user = prompt(`Введите число от ${min} до ${max}:`);

  if (user === null) {
    console.log("Выход из игры");
    break;
  }

  if (user < min || user > max) {
    alert("Введите число в диапазоне!");
    continue;
  }

  user = +user;

  switch (true) {
    case Number.isNaN(user):
      alert("Введите число");
      break;
    case user > bot:
      alert("Меньше!");
      break;
    case user < bot:
      alert("Больше!");
      break;
    case user === bot:
      alert("Правильно");
      break;
  }

  if (usersCount.includes(user)) {
    alert("Это число вы уже вводили!");
    continue;
  }

  usersCount.push(user);
  usersAttempts++;
}

if (user === bot) {
  alert(`Вы угадали число ${bot} за ${usersAttempts} попыток!`);
} else if (usersAttempts === allAttempts) {
  alert(`Ваши попытки закончились, загаданное число было ${bot}.`);
} else {
  alert("Вы вышли из игры");
}
