window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector('.visual');
  const colors = [
    '#60d394',
    '#d3b060',
    '#6075d3',
    '#c260d3',
    '#d3d160',
    '#d36060'
  ];

  // sound
  pads.forEach((pad, i) => {
    pad.addEventListener('click', function() {
      sounds[i].currentTime = 0;
      sounds[i].play();
      createBubbles(i);
    });
  });
  // make bubbles
  const createBubbles = i => {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[i];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend', function() {
      visual.removeChild(this);
    });
  };
});
