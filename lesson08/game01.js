let bot = Math.floor(Math.random() * 100) + 1;
let user;

while (user !== bot) {
  user = prompt("Угадай число от 1 до 100");

  if (user === null) break;

  if (user < 1 || user > 100) {
    alert("Введите число от 1 до 100!");
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
}

alert(`Игра окончена, вот загаданное число ${bot}`);
