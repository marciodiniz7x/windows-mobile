// ---- Seletor de Elementos ---- //

// Telas
const telaDesl = document.querySelector('.telaDesl');
const telaBlock = document.querySelector('.telaBlock');
const telaInicial = document.querySelector('.telaInicial');

// Widgets
const volProgress = document.querySelector('.volProgress');
const volumeArea = document.querySelector('.volumeArea')
const pesquisar = document.querySelector('.pesquisar');
const iconesPesquisa = document.querySelector('.iconesPesquisa');
const digitar = document.querySelector('.digitar');
const cadeado = document.querySelector('.cadeado');
const imgLuaSol = document.querySelector('.climaLuaSol');

// Botões Físicos
const btnPower = document.querySelector('.btnPower');
const btnMais = document.querySelector('.btnMais');
const btnMenos = document.querySelector('.btnMenos');

// Calendário
const diaSemana = document.querySelector('.diaSemana');
const diaMes = document.querySelector('.diaMes');
const clock = document.querySelector('.clock');
const clockClima = document.querySelector('.clockClima');
const dataCalendario = document.querySelector('.data');

// Traços Telas
const tracosTela = document.querySelector('.tracosTela');
const tracos = document.querySelector('.tracos');
const traco1 = document.querySelector('#traco1');
const traco2 = document.querySelector('#traco2');
const traco3 = document.querySelector('#traco3');
const traco4 = document.querySelector('#traco4');

// Botões de ação
const actArrow = document.querySelector('.actarrow');
const actWindows = document.querySelector('.actWindows');
const actTask = document.querySelector('.actTask');

// -------------------- //
//////// Script /////////

let telaDesligada = true;
let telaDeBloqueio = false;
let telaInicialLigada = false;
btnPower.addEventListener('click', () => {
    if (telaDesligada === true) {
        telaDesl.classList.add('sumir');
        telaBlock.classList.remove('sumir');
        telaDesligada = false;
        
    } else if (telaDesligada === false || telaInicialLigada == true) {
        telaDesl.classList.remove('sumir');
        telaBlock.classList.add('sumir');
        telaInicial.classList.add('sumir');
        telaDesligada = true;
    }
});

let contadorVolume = 0;
let sumirVolume;
btnMais.addEventListener('click', () => {
    if (contadorVolume < 200) {
            contadorVolume += 40;
    }
    console.log(contadorVolume);
    volProgress.style.width = `${contadorVolume}px`;
    volumeArea.classList.remove('invisivel');
    volProgress.style.transition = "";
    clearInterval(sumirVolume);
    sumirVolume = setTimeout(() => {
                        volProgress.style.transition = "0ms"
                        volumeArea.classList.add('invisivel');
                    }, 3000);
});

btnMenos.addEventListener('click', () => {
    if (contadorVolume > 0) {
            contadorVolume -= 40;
    }
    console.log(contadorVolume);
    volProgress.style.width = `${contadorVolume}px`;
    volumeArea.classList.remove('invisivel');
    volProgress.style.transition = "";
    clearInterval(sumirVolume);
    sumirVolume = setTimeout(() => {
                        volProgress.style.transition = "0ms"
                        volumeArea.classList.add('invisivel');
                    }, 3000);
   
});

cadeado.addEventListener('click', () => {
    telaDeBloqueio = false;
    telaBlock.classList.add('abrirVert');
    setTimeout(() => {
        cadeado.classList.add('sumir');
    }, 100);
    setTimeout(() => {
        telaBlock.classList.add('sumir');
        telaBlock.classList.remove('abrirVert');
        cadeado.classList.remove('sumir');
    }, 400);
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
    diaMes.innerHTML = ("00" + pegarDiaMes).slice(-2);

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

const ativaTela1 = true;
const ativaTela2 = false;
const ativaTela3 = false;
const ativaTela4 = false;

function irHome() {
    // Função que leva à tela inicial
    traco1.style.width = "24px";
    traco2.style.width = "8px";
    traco3.style.width = "8px";
    traco4.style.width = "8px";

    ativaTela1 = true;
    ativaTela2 = false;
    ativaTela3 = false;
    ativaTela4 = false;
}

traco1.addEventListener('click', function() {
    irHome();
});

traco2.addEventListener('click', function() {
    traco1.style.width = "8px";
    traco2.style.width = "24px";
    traco3.style.width = "8px";
    traco4.style.width = "8px";

    ativaTela1 = false;
    ativaTela2 = true;
    ativaTela3 = false;
    ativaTela4 = false;
});

traco3.addEventListener('click', function() {
    traco1.style.width = "8px";
    traco2.style.width = "8px";
    traco3.style.width = "24px";
    traco4.style.width = "8px";

    ativaTela1 = false;
    ativaTela2 = false;
    ativaTela3 = true;
    ativaTela4 = false;
});

traco4.addEventListener('click', function() {
    traco1.style.width = "8px";
    traco2.style.width = "8px";
    traco3.style.width = "8px";
    traco4.style.width = "24px";

    ativaTela1 = false;
    ativaTela2 = false;
    ativaTela3 = false;
    ativaTela4 = true;
});

// Script botões de ação inferiores
actWindows.addEventListener('click', irHome);

