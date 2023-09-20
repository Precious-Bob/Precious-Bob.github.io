'use strict';
const panels = document.querySelectorAll('.panel');
const container = document.querySelector('.container');

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}

function forwardKeyPress() {
  const activePanel = document.querySelector('.panel.active');
  if (activePanel) {
    const nextPanel = activePanel.nextElementSibling;
    if (nextPanel) {
      removeActiveClass();
      nextPanel.classList.add('active');
    } else {
      removeActiveClass();
      panels[0].classList.add('active');
    }
  }
}

function backwardKeyPress() {
  const activePanel = document.querySelector('.panel.active');
  if (activePanel) {
    const prevPanel = activePanel.previousElementSibling;
    if (prevPanel) {
      removeActiveClass();
      prevPanel.classList.add('active');
    } else {
      removeActiveClass();
      panels[panels.length - 1].classList.add('active');
    }
  }
}

// panels.forEach((panel) => {
//   panel.addEventListener('click', () => {
//     removeActiveClass();
//     panel.classList.add('active');
//   });
// });

// Event delegation
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('panel')) {
    removeActiveClass();
    e.target.classList.add('active');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') forwardKeyPress();
  if (e.key === 'ArrowUp') forwardKeyPress();

  if (e.key === 'ArrowLeft') backwardKeyPress();
  if (e.key === 'ArrowDown') backwardKeyPress();
});
