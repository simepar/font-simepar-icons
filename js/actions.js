
/**
 * makes a simple animations (squares) and applies the animated signal scale
 * @author Andressa Valengo 
 */
var signal_icon = document.getElementById('speed-current-lvl'),
  current_lvl = 6,
  setIntervalID,
  frames_s = 500,
  N = 11;

/**
 * changes the signal lvl
 * @param {number} next level
 */
function changeLvl(next) {
  signal_icon.className = 'fs-animation-signal-lvl-' + next;
}

/**
 * starts the animation
 */
function animate() {
  setIntervalID =  setInterval(function () {
    changeLvl((current_lvl = (current_lvl + 1) % N));
  }, frames_s);
}

/**
 * when the document is ready, it call some functions
 */
$(document).ready(function () {
  animate();
});

