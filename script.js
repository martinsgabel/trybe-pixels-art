var pixelBoard = document.querySelector('#pixel-board');

//descobri como adicionar uma classe juntamente com o elemento com a ajuda de uma resposta desta fonte: https://stackoverflow.com/questions/55224589/document-createelementdiv-with-a-class 
for (let i = 0; i < 5; i += 1) {
    for (let x = 0; x < 5; x += 1) {
        let pixelUnit = document.createElement('div');
        pixelUnit.classList.add('pixel');
        
        pixelBoard.appendChild(pixelUnit);
    }
    let breakPoint = document.createElement('br');
    pixelBoard.appendChild(breakPoint);
}



//escutador de Eventos, clique na cor

let colorPalette = document.getElementsByClassName("color");

function selectedColor (event) {

    //resolvido com a ajuda de meus colegas
    let element = document.getElementsByClassName("color");
    
    for (let i = 0; i < element.length; i++) {
        element[i].classList.remove("selected");
    }

    let clicavel = event.target;
    // colorPaletteItem.classList.add('selected');   

    clicavel.classList.add('selected');
    console.log(clicavel);
}

for (var y = 0; y < colorPalette.length ; y++) {
    colorPaletteItem = colorPalette[y];
    colorPaletteItem.addEventListener("click", selectedColor);
}


//Pintando os  Pixels

function paintPixel (event) {
    let selectedPixel = event.target;
    selectedPixel.style.backgroundColor = window.getComputedStyle(document.querySelector(".selected")).getPropertyValue("background-color");
}

let selectedPixel = document.getElementsByClassName("pixel");

for (let w = 0; w < selectedPixel.length; w++) {
    selectedPixel[w].addEventListener("click", paintPixel)
}


//APAGANDO

function cleanBoard () {
    for (let z = 0; z < 5; z++) {
        for (let x = 0; x < 5; x++) {
            pixel[z,x]
        }
    }
}

let apagaBtn = document.getElementById("clear-board");

apagaBtn.addEventListener("click", cleanBoard);