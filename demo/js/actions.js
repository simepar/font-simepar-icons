
/**
 * makes a simple animations (squares) and applies the animated signal scale
 * @author Andressa Valengo 
 */
var signal_icon = document.getElementById('speed-current-lvl'),
  current_lvl = 6,
  setIntervalID,
  frames_s = 1000,
  currentSquare = -1,
  nextSquare = 0,
  N = 10;

/**
 * creates the elements of the simple animation (squares)
 * @param {number} n number of squares
 */
function createSquares(n) {
  $('#animation').empty();
  var div = document.getElementById('animation'),
    icon,
    i;
  for (i = 0; i < n; i += 1) {
    icon = document.createElement('span');
    icon.className = 'glyphicon glyphicon-stop gray';
    icon.setAttribute('id', 'square-' + i);
    div.appendChild(icon);
  }
}

/**
 * swapes the colors of two squares
 * @param {number} current position of the current square
 * @param {number} next position of the next square
 */
function swapSquareState(current, next) {
  document.getElementById('square-' + current).className = 'glyphicon glyphicon-stop gray';
  document.getElementById('square-' + next).className = 'glyphicon glyphicon-stop orange';
}

/**
 * starts the animation
 */
function animate() {
  setIntervalID =  setInterval(function () {
    swapSquareState((currentSquare = (currentSquare + 1) % N), (nextSquare = (nextSquare + 1) % N));
  }, frames_s);
}

/**
 * Listner to plus-sign
 */
$('#plus-sign').click(function () {
  if (frames_s > 200) {
    frames_s = frames_s - 200;
    current_lvl = current_lvl + 1;
    signal_icon.className = 'fs-animation-signal-lvl-' + current_lvl;
    clearInterval(setIntervalID);
    animate();
  } else {
    signal_icon.className = 'fs-animation-signal-lvl-10';
  }
});

/**
 * Listner to minus-sign
 */
$('#minus-sign').click(function () {
  if (frames_s < 2000) {
    frames_s = frames_s + 200;
    current_lvl = current_lvl - 1;
    signal_icon.className = 'fs-animation-signal-lvl-' + current_lvl;
    clearInterval(setIntervalID);
    animate();
  } else {
    signal_icon.className = 'fs-animation-signal-lvl-1';
  }
});

/**
 * when the document is ready, it call some functions
 */
$(document).ready(function () {
  createSquares(N);
  document.getElementById('square-0').className = 'glyphicon glyphicon-stop orange';
  animate();
});

