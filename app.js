function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0; // rewinds audio & allows you to play in succession
  audio.play();
  key.classList.add('playing'); // same as key.addClass() in jQuery
}

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  // console.log(event.propertyName);
  this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
