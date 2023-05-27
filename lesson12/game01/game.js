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
      player: 0,
      computer: 0,
    };
    return function start() {
      let playerChoice = prompt('Выберите: камень, ножницы или бумага');
      if (playerChoice === null) {
        const confirmExit = confirm('Вы действительно хотите выйти?');
        if (confirmExit) {
          alert(`Результат: 
Игрок - ${result.player},
Компьютер - ${result.computer}`);
          return;
        }
      }

      const validChoices = FIGURES_RUS.filter((figure) =>
        figure.startsWith(playerChoice.toLowerCase()),
      );
      if (playerChoice.length === 0) {
        alert('Некорректный выбор. Попробуйте еще раз.');
        start();
        return;
      }
      playerChoice = validChoices[0];

      if (!FIGURES_RUS.includes(playerChoice)) {
        alert('Некорректный выбор. Попробуйте еще раз.');
        start();
        return;
      }

      const computerChoice = FIGURES_RUS[getRandomIntInclusive(0, 2)];
      switch (true) {
        case playerChoice === computerChoice:
          alert(`Вы ${playerChoice} 
Компьютер ${computerChoice}
Ничья`);
          break;
        case (playerChoice === 'камень' && computerChoice === 'ножницы') ||
          (playerChoice === 'ножницы' && computerChoice === 'бумага') ||
          (playerChoice === 'бумага' && computerChoice === 'камень'):
          alert(`Вы ${playerChoice} 
Компьютер ${computerChoice}
Вы победили`);
          result.player++;
          break;
        default:
          alert(`Вы ${playerChoice} 
Компьютер ${computerChoice}
Вы проиграли`);
          result.computer++;
      }
      const continuePlaying = confirm('Продолжить игру?');
      if (!continuePlaying) {
        alert(`Результат: 
Игрок - ${result.player},
Компьютер - ${result.computer}`);
        return;
      } else {
        start();
      }
    };
  };

  window.rps = game;
})();
