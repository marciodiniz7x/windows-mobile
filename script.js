// Seletor de Elementos
const telaBlock = document.querySelector('.telaBlock');
const telaInicial = document.querySelector('.telaInicial');

const pesquisar = document.querySelector('.pesquisar');
const digitar = document.querySelector('.digitar');

const cadeado = document.querySelector('.cadeado');
const btnPower = document.querySelector('.btnPower');


// -------------------- //
//////// Script /////////

let telaBloqueada = true;
let telaDeBloqueio = false;
let telaInicialLigada = false;
btnPower.addEventListener('click', () => {
    if (telaBloqueada === true) {
        telaBlock.classList.remove('sumir');
        telaBloqueada = false;
        

    } else if (telaBloqueada === false || telaInicialLigada == true) {
        telaBlock.classList.add('sumir');
        telaInicial.classList.add('sumir');
        telaBloqueada = true;
    }
})

cadeado.addEventListener('click', () => {
    telaDeBloqueio = false;
    telaBlock.classList.add('sumir');
    telaInicialLigada = true;
    telaInicial.classList.remove('sumir');

})

digitar.addEventListener('focusin', () => {
    pesquisar.classList.add('sumir')
})

