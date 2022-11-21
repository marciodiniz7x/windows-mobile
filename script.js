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
const diaMes = document.querySelector('.diaMes');
const clock = document.querySelector('.clock');
const clockClima = document.querySelector('.clockClima');


// -------------------- //
//////// Script /////////

let telaDesligada = true;
let telaDeBloqueio = false;
let telaInicialLigada = false;
btnPower.addEventListener('click', () => {
    if (telaDesligada === true) {
        telaBlock.classList.remove('sumir');
        telaDesligada = false;
        
    } else if (telaDesligada === false || telaInicialLigada == true) {
        telaBlock.classList.add('sumir');
        telaInicial.classList.add('sumir');
        telaDesligada = true;
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
const atualizaHora = () => {
    const data = new Date();
    const pegarAno = data.getFullYear();
    const pegarMes = data.getMonth();
    const pegarDiaMes = data.getDate()
    const pegarDia = data.getDay();
    const pegarHora = data.getHours();
    const pegarMinuto = data.getMinutes();

    let zeroHora;
    let zeroMinuto;
    if (pegarHora < 10) {
        zeroHora = 0;
    } else {
        zeroHora = "";
    }

    if (pegarMinuto < 10) {
        zeroMinuto = 0;
    } else {
        zeroMinuto = "";
    }

    const semana = ['DOMINGO', 'SEGUNDA-FEIRA', 'TERÇA-FEIRA', 'QUARTA-FEIRA', 'QUINTA-FEIRA', 'SEXTA-FEIRA', 'SÁBADO'];

    diaSemana.innerHTML = semana[pegarDia];
    diaMes.innerHTML = pegarDiaMes;

    clock.innerHTML = zeroHora + pegarHora + ':' + zeroMinuto + pegarMinuto;
    clockClima.innerHTML = zeroHora + pegarHora + ':' + zeroMinuto + pegarMinuto;
    
}

const loopHora = setInterval(() => {
    atualizaHora();
}, 100);



