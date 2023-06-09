// CREATING PIXEL BOARD

// descobri como adicionar uma classe juntamente com o elemento com a ajuda de uma resposta desta fonte: https://stackoverflow.com/questions/55224589/document-createelementdiv-with-a-class

const pixelBoard = document.querySelector('#pixel-board');

for (let i = 0; i < 5; i += 1) {
  for (let x = 0; x < 5; x += 1) {
    const pixelUnit = document.createElement('div');
    pixelUnit.classList.add('pixel');

    pixelBoard.appendChild(pixelUnit);
  }
  const breakPoint = document.createElement('br');
  pixelBoard.appendChild(breakPoint);
}

// ADDING EVENT LISTENER TO COLOR PALETTE

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

// Color Palette

const colorPalette = document.getElementsByClassName('color');

for (let index = 0; index < colorPalette.length; index += 1) {
  const colorPaletteItem = colorPalette[index];
  colorPaletteItem.addEventListener('click', selectedColor);
}

// PAINTING BOARD

function paintPixel(event) {
  const selectedPixel = event.target;
  selectedPixel.style.backgroundColor = window
    .getComputedStyle(document.querySelector('.selected'))
    .getPropertyValue('background-color');
}

// Adding listener to each pixel
const selectedPixel = document.getElementsByClassName('pixel');

for (let index = 0; index < selectedPixel.length; index += 1) {
  selectedPixel[index].addEventListener('click', paintPixel);
}

// CLEANING BOARD

const qtdPixel = document.getElementsByClassName('pixel');

function cleanBoard() {
  for (let index = 0; index < qtdPixel.length; index += 1) {
    qtdPixel[index].style.backgroundColor = 'white';
  }
}

// Adding listener to button
const apagaBtn = document.getElementById('clear-board');

apagaBtn.addEventListener('click', cleanBoard);
