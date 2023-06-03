'use strict';

(function() {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
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

      default() {
        this._player = 5;
        this._computer = 5;
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

    const gameRps = () => {
      let playerChoice = prompt('Выберите: камень, ножницы или бумага');
      if (playerChoice === null) {
        return null;
      }

      const validChoices = FIGURES_RUS.filter((figure) =>
        figure.startsWith(playerChoice.toLowerCase()),
      );
      if (playerChoice.length === 0) {
        alert('Некорректный выбор. Попробуйте еще раз.');
        return gameRps();
      }
      playerChoice = validChoices[0];

      if (!FIGURES_RUS.includes(playerChoice)) {
        alert('Некорректный выбор. Попробуйте еще раз.');
        return gameRps();
      }

      const computerChoice = FIGURES_RUS[getRandomIntInclusive(0, 2)];
      switch (true) {
        case playerChoice === computerChoice:
          alert(`Вы ${playerChoice} 
Компьютер ${computerChoice}
Ничья`);
          return gameRps();
        case FIGURES_RUS.indexOf(computerChoice) ===
          (FIGURES_RUS.indexOf(playerChoice) + 1) % 3:
          alert(`Вы ${playerChoice} 
Компьютер ${computerChoice}
Вы победили`);
          return true;
        default:
          alert(`Вы ${playerChoice} 
Компьютер ${computerChoice}
Вы проиграли`);
          return false;
      }
    };
    let firstPlayer = gameRps();
    return function start() {
      if (firstPlayer === null) {
        alert('Вы вышли из игры');
        return;
      }
      if (result.totalPlayer <= 0 || result.totalComputer <= 0) {
        const playAgain = confirm('Хотите сыграть еще раз?');
        if (playAgain) {
          result.default();
          firstPlayer = gameRps();
          return start();
        } else {
          return;
        }
      }

      if (firstPlayer === true) {
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
        firstPlayer = false;
      }
      if (
        result.totalComputer > 0 &&
        result.totalPlayer > 0 &&
        firstPlayer === false
      ) {
        const botGuess = getRandomIntInclusive(1, result.totalComputer);
        const playerChoice = playerOdd();
        switch (true) {
          case botGuess % 2 === playerChoice:
            alert('Вы угадали!');
            result.totalPlayer = +botGuess;
            result.totalComputer = -botGuess;
            winner(result.totalPlayer, result.totalComputer);
            break;
          default:
            alert('Вы не угадали!');
            result.totalPlayer = -botGuess;
            result.totalComputer = +botGuess;
            winner(result.totalPlayer, result.totalComputer);
        }
        firstPlayer = true;
      }
      start();
    };
  };
  window.play = game;
})();
