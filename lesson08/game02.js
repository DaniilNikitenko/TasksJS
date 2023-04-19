let min = +prompt("Введите минимальное число диапазона:");
let max = +prompt("Введите максимальное число диапазона:");

while (min >= max) {
  alert("Минимальное число должно быть меньше максимального!");
  min = +prompt("Введите минимальное число диапазона:");
  max = +prompt("Введите максимальное число диапазона:");
}

let range = max - min + 1;
let allAttempts = Math.floor(range * 0.3);

if (range >= 50 && range <= 100) {
  allAttempts = 15;
}

let bot = Math.floor(Math.random() * range) + min;
let user = 0;
let usersAttempts = 0;
let usersCount = [];

while (user !== bot && usersAttempts < allAttempts) {
  user = prompt(`Введите число от ${min} до ${max}:`);
  if (user === "Отмена") {
    alert("Игра завершена");
    break;
  }

  user = Number(user);

  if (Number.isNaN(user)) {
    alert("Введите число!");
    continue;
  }

  if (user < min || user > max) {
    alert("Введите число в диапазоне!");
    continue;
  }

  if (usersCount.includes(user)) {
    alert("Это число вы уже вводили!");
    continue;
  }

  usersCount.push(user);
  usersAttempts++;

  if (user > bot) {
    alert("Загаданное число меньше!");
  } else if (user < bot) {
    alert("Загаданное число больше!");
  }
}

if (user === bot) {
  alert(`Вы угадали число ${bot} за ${usersAttempts} попыток!`);
} else {
  alert(`Вы проиграли! Загаданное число было ${bot}.`);
}
