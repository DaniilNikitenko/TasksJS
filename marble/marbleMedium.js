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
      const playerBalls = Math.max(result.totalPlayer, 0);
      const computerBalls = Math.max(result.totalComputer, 0);

      alert(
          `Игрок ${playerBalls} шариков
Бот ${computerBalls} шариков
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
        case +user % 2 === bot:
          alert('Бот Угадал');
          result.totalComputer = +user;
          result.totalPlayer = -user;
          break;
        default:
          alert('Бот не угадал');
          result.totalPlayer = +user;
          result.totalComputer = -user;
      }

      if (result.totalComputer > 0 && result.totalPlayer > 0) {
        const botGuess = getRandomIntInclusive(1, result.totalComputer);
        const playerChoice =
          confirm(`Бот загадал число от 1 до ${result.totalComputer}.
  Выберите "ОК", если число чётное, или "Отмена", если число нечётное.`);
        switch (true) {
          case botGuess % 2 === (playerChoice ? 0 : 1):
            alert('Вы не угадали!');
            result.totalPlayer = -botGuess;
            result.totalComputer = +botGuess;
            start();
            break;
          default:
            alert('Вы угадали!');
            result.totalPlayer = +botGuess;
            result.totalComputer = -botGuess;
            start();
        }
      } else {
        winner(result.totalPlayer, result.totalComputer);
      }
    };
  };
  window.play = game;
})();
