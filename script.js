// ---- Seletor de Elementos ---- //

// Telas
const telaBlock = document.querySelector('.telaBlock');
const telaInicial = document.querySelector('.telaInicial');

// Widgets
const pesquisar = document.querySelector('.pesquisar');
const pesquisaGoogle = document.querySelector('.pesquisaGoogle');
const digitar = document.querySelector('.digitar');
const cadeado = document.querySelector('.cadeado');

// Botões Físicos
const btnPower = document.querySelector('.btnPower');

// Calendário
const diaSemana = document.querySelector('.diaSemana');


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
    pesquisaGoogle.classList.add('sumir');
})
digitar.addEventListener('focusout', () => {
    pesquisaGoogle.classList.remove('sumir');
    digitar.value = "";
})

// Script Calendário


