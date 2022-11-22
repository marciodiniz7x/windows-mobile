// ---- Seletor de Elementos ---- //

// Telas
const telaBlock = document.querySelector('.telaBlock');
const telaInicial = document.querySelector('.telaInicial');

// Widgets
const pesquisar = document.querySelector('.pesquisar');
const iconesPesquisa = document.querySelector('.iconesPesquisa');
const digitar = document.querySelector('.digitar');
const cadeado = document.querySelector('.cadeado');
const imgLuaSol = document.querySelector('.climaLuaSol');

// Botões Físicos
const btnPower = document.querySelector('.btnPower');

// Calendário
const diaSemana = document.querySelector('.diaSemana');
const diaMes = document.querySelector('.diaMes');
const clock = document.querySelector('.clock');
const clockClima = document.querySelector('.clockClima');
const dataCalendario = document.querySelector('.data');

// Traços Telas
const tracos = document.querySelector('.tracos');
const traco1 = document.querySelector('#traco1');


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
    iconesPesquisa.classList.add('sumir');
})
digitar.addEventListener('focusout', () => {
    iconesPesquisa.classList.remove('sumir');
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

    // Aqui criei as variáveis "zero" pra adicionar um 0 antes da hora ou minuto caso ele seja menor que 10, para manter sempre dois dígitos.
    let zeroHora;
    let zeroMinuto;
    if (pegarHora < 10) {
        zeroHora = "0";
    } else {
        zeroHora = "";
    }

    if (pegarMinuto < 10) {
        zeroMinuto = "0";
    } else {
        zeroMinuto = "";
    }


    const semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    // Lógica que modifica as horas e datas
    diaSemana.innerHTML = semana[pegarDia].toUpperCase();
    diaMes.innerHTML = pegarDiaMes;

    clock.innerHTML = zeroHora + pegarHora + ':' + zeroMinuto + pegarMinuto;
    
    clockClima.innerHTML = zeroHora + pegarHora + ':' + zeroMinuto + pegarMinuto;

    dataCalendario.innerHTML = `${semana[pegarDia]}, ${pegarDiaMes} de ${meses[pegarMes]}`

    // Lógica que modifica as imagens no widget de clima
    if (pegarHora >= 6 && pegarHora <= 18) {
        imgLuaSol.style.backgroundImage = "url(../img/climaSol.png)";
    } else {
        imgLuaSol.style.backgroundImage = "url(../img/climaLua.png)";
    }
    
}

const loopHora = setInterval(() => {
    atualizaHora();
}, 100);

// Script Trocar Tela
tracos.addEventListener('click', function() {
    tracos.style.width = "24px"
})

