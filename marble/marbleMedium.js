'use strict';

(function () {
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
      set player(value) {
        this._player = value;
      },
      set computer(value) {
        this._computer = value;
      },
    };

    const printWinner = (message) => {
      alert(
        `Игрок ${result.totalPlayer} шариков
Бот ${result.totalComputer} шариков
${message}`
      );
    };

    const winner = (player, computer) => {
      switch (true) {
        case player <= 1:
          result.computer = 10;
          result.player = 0;
          return printWinner('Вы проиграли!');
        case computer <= 0:
          result.player = 10;
          result.computer = 0;
          return printWinner('Вы выиграли!');
        default:
          return printWinner('Игра продолжается!');
      }
    };

    const print = (player, computer) => {
      switch (true) {
        case player <= 0:
          result.computer = 10;
          result.player = 0;
          return printWinner('Вы проиграли!');
        case computer <= 0:
          result.player = 10;
          result.computer = 0;
          return printWinner('Вы выиграли!');
        default:
          return printWinner('Игра продолжается!');
      }
    };

    const playerOdd = () => (confirm(`Число чётное?`) ? 0 : 1);

    return function start() {
      switch (true) {
        case result.totalPlayer <= 1:
        case result.totalComputer <= 0:
          return;
      }

      const user = prompt(`Загадывайте число от 1 до ${result.totalPlayer}`);
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
          print(result.totalPlayer, result.totalComputer);
          break;
        default:
          alert('Бот не угадал');
          result.totalPlayer = +user;
          result.totalComputer = -user;
          print(result.totalPlayer, result.totalComputer);
      }

      if (result.totalComputer > 0 && result.totalPlayer > 0) {
        const botGuess = getRandomIntInclusive(1, result.totalComputer);
        const playerChoice = playerOdd();
        switch (true) {
          case botGuess % 2 === playerChoice:
            alert('Вы угадали!');
            result.totalPlayer = +botGuess;
            result.totalComputer = -botGuess;
            winner(result.totalPlayer, result.totalComputer);
            start();
            break;
          case botGuess % 2 !== playerChoice:
            alert('Вы не угадали!');
            result.totalPlayer = -botGuess;
            result.totalComputer = +botGuess;
            winner(result.totalPlayer, result.totalComputer);
            start();
        }
      } else {
        winner(result.totalPlayer, result.totalComputer);
      }
    };
  };
  window.play = game;
})();
