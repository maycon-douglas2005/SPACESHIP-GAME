let botaoDireita = document.querySelector('#btnDireita');
let botaoEsquerdo = document.querySelector('#btnEsquerda');


let personagem = document.querySelector('#personagem');


let coluna = document.querySelector('#coluna');


botaoDireita.addEventListener('click', function() {
    
    coluna.className = "col-6 coluna_personagem";
    
})

botaoEsquerdo.addEventListener('click', function(){
    coluna.className = "col-6 coluna_persona_esquerda";
})