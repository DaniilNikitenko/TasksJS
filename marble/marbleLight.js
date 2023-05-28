'use strict';

(function() {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = () => {
    const result = {
      _player: 5,
      _computer: 5,

      get totalPlayer() {
        return this._player;
      },
      set totalPlayer(value) {
        this._player += value;
      },

      get totalComputer() {
        return this._computer;
      },
      set totalComputer(value) {
        this._computer += value;
      },
    };

    const printWinner = (message) => {
      alert(
          `Игрок ${result.totalPlayer} шариков
Бот ${result.totalComputer} шариков
${message}`,
      );
    };

    const winner = (player, computer) => {
      switch (true) {
        case player <= 0:
          return printWinner('Вы проиграли!');
        case computer <= 0:
          return printWinner('Вы выиграли!');
      }
    };

    return function start() {
      if (result.totalPlayer <= 0 || result.totalComputer <= 0) {
        alert('Игра закончена');
        winner(result.totalPlayer, result.totalComputer);
        return;
      }
      alert(`Количество шариков у вас: ${result.totalPlayer}
Количество шариков у бота: ${result.totalComputer}`);
      const user = prompt(`Загадывайте число от 0 до ${result.totalPlayer}`);
      const bot = getRandomIntInclusive(0, 1);

      switch (true) {
        case user === null:
          printWinner('Вы вышли из игры!');
          return;
        case Number.isNaN(+user):
        case user < 1:
        case user > result.totalPlayer:
          alert('Введите корректные значения!');
          return start();
      }

      switch (true) {
        case user % 2 === bot:
          alert('Бот Угадал');
          result.totalComputer = +user;
          result.totalPlayer = -user;
          start();
          break;
        default: {
          alert('Бот не угадал');
          result.totalPlayer = +user;
          result.totalComputer = -user;
          start();
        }
      }
    };
  };

  window.play = game;
})();
