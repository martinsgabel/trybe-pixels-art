let pixelBoard = document.querySelector('.pixel-board');
let rowNum = 5;

//descobri como adicionar uma classe juntamente com o elemento com a ajuda de uma resposta desta fonte: https://stackoverflow.com/questions/55224589/document-createelementdiv-with-a-class
for (let i = 0; i <= rowNum; i += 1) {
    for (let x = 0; x <= rowNum; x += 1) {
        let pixelUnit = document.createElement('div');
        pixelUnit.classList.add('pixel');
        
        //pixelBoard.appendChild(pixelUnit);
    }
}

//selecionando a cor Preta inicialmente
let firstSelected = document.querySelector('.a');
firstSelected.classList.add('selected');

//escutador de Eventos, clique na cor