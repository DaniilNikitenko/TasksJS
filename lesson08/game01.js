let bot = Math.floor(Math.random() * 100);
let user = 0;
while (true) {
  user = prompt("Отгадай число");

  if (user === "Отмена") {
    alert("Выход из игры");
    break;
  }

  user = Number(user);

  if (Number.isNaN(user)) {
    alert("Введи число");
  }

  if (user === bot) {
    alert("Правильно");
    break;
  }

  if (user > bot) {
    alert("Меньше");
  }

  if (user < bot) {
    alert("Больше");
  }
}

alert(`Игра закончена,вот загаданное число ${bot}`);
