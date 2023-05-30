'use strict';

const button = document.createElement('button');
button.innerText = 'Нажми меня';
button.style.position = 'absolute';
button.style.display = 'none';
document.body.appendChild(button);

const moveButton = () => {
  button.style.display = 'flex';
  const buttonRect = button.getBoundingClientRect();
  const windowWidth = window.innerWidth - buttonRect.width;
  const windowHeight = window.innerHeight - buttonRect.height;

  const newLeft = Math.floor(Math.random() * windowWidth);
  const newTop = Math.floor(Math.random() * windowHeight);

  button.style.left = `${newLeft}px`;
  button.style.top = `${newTop}px`;
};

button.addEventListener('click', moveButton);
window.addEventListener('load', moveButton);
