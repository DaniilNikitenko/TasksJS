'use strict';

(function() {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getFigure = (lang) => {
    if (lang === 'EN' || lang === 'ENG') {
      return FIGURES_ENG;
    } else {
      return FIGURES_RUS;
    }
  };

  const game = (language = 'RUS') => {
    const result = {
      player: 0,
      computer: 0,
    };
    const lang = language === 'EN' || language === 'ENG' ? 'EN' : 'RUS';
    const figures = getFigure(lang);

    const getChoiceMessage = () => {
      switch (lang) {
        case 'EN' || 'ENG':
          return `Choose: ${figures.join(', ')}`;
        default:
          return `Выберите: ${figures.join(', ')}`;
      }
    };

    const getTieMessage = (playerChoice, computerChoice) => {
      switch (lang) {
        case 'EN' || 'ENG':
          return `You chose: ${playerChoice}
Computer chose: ${computerChoice}
It's a tie!`;
        default:
          return `Вы выбрали: ${playerChoice}
Компьютер выбрал: ${computerChoice}
Ничья!`;
      }
    };

    const getWinMessage = (playerChoice, computerChoice) => {
      switch (lang) {
        case 'EN' || 'ENG':
          return `You chose: ${playerChoice}
Computer chose: ${computerChoice}
You win!`;
        default:
          return `Вы выбрали: ${playerChoice}
Компьютер выбрал: ${computerChoice}
Вы победили!`;
      }
    };

    const getLoseMessage = (playerChoice, computerChoice) => {
      switch (lang) {
        case 'EN' || 'ENG':
          return `You chose: ${playerChoice}
Computer chose: ${computerChoice}
You lose!`;
        default:
          return `Вы выбрали: ${playerChoice}
Компьютер выбрал: ${computerChoice}
Вы проиграли!`;
      }
    };

    const getScoreMessage = () => {
      switch (lang) {
        case 'EN' || 'ENG':
          return `Result: 
Player - ${result.player}, 
Computer - ${result.computer}`;
        default:
          return `Результат:
Игрок - ${result.player},
Компьютер - ${result.computer}`;
      }
    };

    const getContinuePlayingMessage = () => {
      switch (lang) {
        case 'EN' || 'ENG':
          return 'Continue playing?';
        default:
          return 'Продолжить игру?';
      }
    };

    const getInvalidChoiceMessage = () => {
      switch (lang) {
        case 'EN' || 'ENG':
          return 'Invalid choice. Please try again.';
        default:
          return 'Некорректный выбор. Попробуйте еще раз.';
      }
    };

    const getConfirmExitMessage = () => {
      switch (lang) {
        case 'EN' || 'ENG':
          return 'Are you sure you want to quit?';
        default:
          return 'Вы действительно хотите выйти?';
      }
    };

    return function start() {
      let playerChoice = prompt(getChoiceMessage());

      if (playerChoice === null) {
        const confirmExit = confirm(getConfirmExitMessage());
        if (confirmExit) {
          alert(getScoreMessage());
          return;
        } else {
          start();
        }
      }

      const validChoices = figures.filter((figure) =>
        figure.toLowerCase().startsWith(playerChoice.toLowerCase()),
      );

      if (playerChoice.length === 0) {
        alert(getInvalidChoiceMessage());
        start();
        return;
      }

      playerChoice = validChoices[0];

      if (!figures.includes(playerChoice)) {
        alert(getInvalidChoiceMessage());
        start();
        return;
      }

      const computerChoice = figures[getRandomIntInclusive(0, 2)];

      switch (true) {
        case playerChoice === computerChoice:
          alert(getTieMessage(playerChoice, computerChoice));
          break;
        case (playerChoice === figures[0] && computerChoice === figures[1]) ||
          (playerChoice === figures[1] && computerChoice === figures[2]) ||
          (playerChoice === figures[2] && computerChoice === figures[1]):
          alert(getWinMessage(playerChoice, computerChoice));
          result.player++;
          break;
        default:
          alert(getLoseMessage(playerChoice, computerChoice));
          result.computer++;
      }

      const continuePlaying = confirm(getContinuePlayingMessage());
      if (!continuePlaying) {
        alert(getScoreMessage());
        return;
      } else {
        start();
      }
    };
  };

  window.rps = game;
})();
