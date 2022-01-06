let pixelBoard = document.querySelector('#pixel-board');

//descobri como adicionar uma classe juntamente com o elemento com a ajuda de uma resposta desta fonte: https://stackoverflow.com/questions/55224589/document-createelementdiv-with-a-class 
for (let i = 0; i < 5; i += 1) {
    for (let x = 0; x < 5; x += 1) {
        let pixelUnit = document.createElement('div');
        pixelUnit.classList.add('pixel');
        
        pixelBoard.appendChild(pixelUnit);
    }
}

//selecionando a cor Preta inicialmente
let firstSelected = document.querySelector('.a');
firstSelected.classList.add('selected');

//escutador de Eventos, clique na cor
let clickedColor = document.getElementsByClassName("color");

clickedColor.addEventListener("click", recebeClick);

function recebeClick() {
    let firstSelected = document.querySelector('.a');
    firstSelected.classList.add('selected');
}