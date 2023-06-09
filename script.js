// CREATING PIXEL BOARD

// descobri como adicionar uma classe juntamente com o elemento com a ajuda de uma resposta desta fonte: https://stackoverflow.com/questions/55224589/document-createelementdiv-with-a-class

const pixelBoard = document.querySelector('#pixel-board');

for (let i = 0; i < 5; i += 1) {
  for (let x = 0; x < 9; x += 1) {
    const pixelUnit = document.createElement('div');
    pixelUnit.classList.add('pixel');

    pixelBoard.appendChild(pixelUnit);
  }
  const breakPoint = document.createElement('br');
  pixelBoard.appendChild(breakPoint);
}

// SELECTING COLOR

function selectedColor(event) {
  // deselect  the previous color
  const element = document.getElementsByClassName('color');

  for (let i = 0; i < element.length; i += 1) {
    element[i].classList.remove('selected');
  }

  // selecting the new color
  const targettedcolor = event.target;

  targettedcolor.classList.add('selected');
}

// PAINTING BOARD

function paintPixel(event) {
  const selectedPixel = event.target;
  selectedPixel.style.backgroundColor = window
    .getComputedStyle(document.querySelector('.selected'))
    .getPropertyValue('background-color');
}

// CLEANING BOARD

const pixels = document.getElementsByClassName('pixel');

function cleanBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

// LISTENERS

// clean-button
document.getElementById('clear-board').addEventListener('click', cleanBoard);

// color-palette
const colorPalette = document.getElementsByClassName('color');

for (let index = 0; index < colorPalette.length; index += 1) {
  colorPalette[index].addEventListener('click', selectedColor);
}

// pixels
const selectedPixel = document.getElementsByClassName('pixel');

for (let index = 0; index < selectedPixel.length; index += 1) {
  selectedPixel[index].addEventListener('click', paintPixel);
}
