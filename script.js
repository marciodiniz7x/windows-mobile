// ---- Seletor de Elementos ---- //

// Telas
const tela = document.querySelector('.tela');
const telaDesl = document.querySelector('.telaDesl');
const telaBlock = document.querySelector('.telaBlock');
const telaInicial = document.querySelector('.telaInicial');

const flexWidgets = document.querySelector('.flex-widgets');
const flexWidgets2 = document.querySelector('.flex-widgets2');


// Widgets
const barraNotif = document.querySelector('.barra-notif');
const topIcons = document.querySelector('.topIcons');
const clockNotif = document.querySelector('.clockNotif');
const volProgress = document.querySelector('.volProgress');
const volumeArea = document.querySelector('.volumeArea')
const pesquisar = document.querySelector('.pesquisar');
const iconesPesquisa = document.querySelector('.iconesPesquisa');
const digitar = document.querySelector('.digitar');
const cadeado = document.querySelector('.cadeado');
const imgLuaSol = document.querySelector('.climaLuaSol');

// Botões Físicos
const botoesFisicos = document.querySelector('.botoesFisicos');
const btnFisicos = document.querySelector('.btnFisicos');
const btnTop = document.querySelector('.btnTop');
const btnPower = document.querySelector('.btnPower');
const btnMais = document.querySelector('.btnMais');
const btnMenos = document.querySelector('.btnMenos');

// Calendário
const diaSemana = document.querySelector('.diaSemana');
const diaMes = document.querySelector('.diaMes');
const clock = document.querySelector('.clock');
const clockClima = document.querySelector('.clockClima');
const dataCalendario = document.querySelector('.data');
const dataNotif = document.querySelector('.dataNotif');

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

// Barra de Notificações

let barraDrop = false;
btnTop.addEventListener('click', () => {
    if (barraDrop === false) {
        setTimeout(() => {
            pesquisar.classList.add('sumir');
        }, 100);
        
        barraNotif.style.top = '-1px';
        topIcons.style.color = '#292929';
        
        barraDrop = true
    } else if (barraDrop === true) {
        setTimeout(() => {
            pesquisar.classList.remove('sumir');
        }, 100);
        barraNotif.style.top = '-200px';
        topIcons.style.color = '#f0f8ff';
        
        barraDrop = false;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const circle = document.querySelectorAll('.circle');
    const iconNoti = document.querySelectorAll('.iconNoti');

    // Wifi
    circle[0].addEventListener('click', function() {
        const corAtual = getComputedStyle(this).backgroundColor;

        if (corAtual === 'rgb(184, 191, 212)') {
            circle[0].style.backgroundColor = '#006eff';
            circle[0].style.color = '#ffffff';
            iconNoti[0].innerHTML = 'signal_wifi_4_bar';
        } else {
            circle[0].style.backgroundColor = '#b8bfd4';
            circle[0].style.color = '#4d4d4d';
            iconNoti[0].innerHTML = 'signal_wifi_off';
        }
    });

    // Não Perturbe
    circle[1].addEventListener('click', function() {
        const corAtual = getComputedStyle(this).backgroundColor
        if (corAtual === 'rgb(184, 191, 212)') {
            circle[1].style.backgroundColor = '#006eff';
            circle[1].style.color = '#ffffff';
            iconNoti[3].innerHTML = 'do_not_disturb_on';
            
        } else {
            circle[1].style.backgroundColor = '#b8bfd4';
            circle[1].style.color = '#4d4d4d';
            iconNoti[3].innerHTML = '';
        }
    });

    // Dados Móveis
    circle[2].addEventListener('click', function() {
        const corAtual = getComputedStyle(this).backgroundColor;
        
        if (corAtual === 'rgb(184, 191, 212)') {
            circle[2].style.backgroundColor = '#006eff';
            circle[2].style.color = '#ffffff';
            iconNoti[1].innerHTML = 'signal_cellular_3_bar';
        } else {
            circle[2].style.backgroundColor = '#b8bfd4';
            circle[2].style.color = '#4d4d4d';
            iconNoti[1].innerHTML = 'signal_cellular_off';
        }
    });

    // Bluetooth
    circle[3].addEventListener('click', function() {
        const corAtual = getComputedStyle(this).backgroundColor
        if (corAtual === 'rgb(184, 191, 212)') {
            circle[3].style.backgroundColor = '#006eff';
            circle[3].style.color = '#ffffff';
            iconNoti[4].innerHTML = 'bluetooth';
            
        } else {
            circle[3].style.backgroundColor = '#b8bfd4';
            circle[3].style.color = '#4d4d4d';
            iconNoti[4].innerHTML = '';
        }
    });

    // Bateria
    circle[4].addEventListener('click', function() {
        const corAtual = getComputedStyle(this).backgroundColor
        if (corAtual === 'rgb(184, 191, 212)') {
            circle[4].style.backgroundColor = '#006eff';
            circle[4].style.color = '#ffffff';
            iconNoti[2].innerHTML = 'battery_saver';
            
        } else {
            circle[4].style.backgroundColor = '#b8bfd4';
            circle[4].style.color = '#4d4d4d';
            iconNoti[2].innerHTML = 'battery_5_bar';
        }
    });
    // Bateria
    circle[5].addEventListener('click', function() {
        const corAtual = getComputedStyle(this).backgroundColor
        if (corAtual === 'rgb(184, 191, 212)') {
            circle[5].style.backgroundColor = '#006eff';
            circle[5].style.color = '#ffffff';
            tela.style.boxShadow = '1px 1px 60px 20px rgb(224, 170, 23)';
            
        } else {
            circle[5].style.backgroundColor = '#b8bfd4';
            circle[5].style.color = '#4d4d4d';
            iconNoti[2].innerHTML = 'battery_5_bar';
            tela.style.boxShadow = '1px 1px 40px 0px rgb(0, 0, 0)';
        }
    });
});

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
    desativarInicio();
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

    // Barra de pesquisa
    pesquisar.style.top = '-100px';
    setTimeout(() => {
        pesquisar.style.top = '100px';
        
    }, 10);

    setTimeout(() => {
        cadeado.classList.add('sumir');
        setarInicio();
    }, 100);
    setTimeout(() => {
        telaBlock.classList.add('sumir');
        telaBlock.classList.remove('abrirVert');
        cadeado.classList.remove('sumir');
    }, 400);
    telaInicialLigada = true;
    telaInicial.classList.remove('sumir');

});

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
    clockNotif.innerHTML = zeroHora + pegarHora + ':' + zeroMinuto + pegarMinuto;

    dataCalendario.innerHTML = `${semana[pegarDia]}, ${pegarDiaMes} de ${meses[pegarMes]}`
    dataNotif.innerHTML = `${semana[pegarDia]}, ${pegarDiaMes} de ${meses[pegarMes]}`

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

const irHome = () => {
    // Função que leva à tela inicial
    traco1.style.width = "24px";
    traco2.style.width = "8px";
    traco3.style.width = "8px";

    flexWidgets2.classList.add('centerRight');
    setTimeout(() => {
        flexWidgets2.classList.remove('centerRight');
        flexWidgets2.style.left = '320px';
    }, 400);

    flexWidgets.classList.add('leftCenter');
    setTimeout(() => {
        flexWidgets.classList.remove('leftCenter');
        flexWidgets.style.left = '';
    }, 400);

}

traco1.addEventListener('click', irHome);
actWindows.addEventListener('click', irHome);

traco2.addEventListener('click', function() {
    traco1.style.width = "8px";
    traco2.style.width = "24px";
    traco3.style.width = "8px";

    flexWidgets.classList.add('centerLeft');
    setTimeout(() => {
        flexWidgets.style.left = '-320px';
        flexWidgets.classList.remove('centerLeft');
    }, 400);
    
    flexWidgets2.classList.add('rightCenter');
    setTimeout(() => {
        flexWidgets2.classList.remove('rightCenter');
        flexWidgets2.style.left = '0px';
    }, 400);
});

traco3.addEventListener('click', function() {
    traco1.style.width = "8px";
    traco2.style.width = "8px";
    traco3.style.width = "24px";

});

traco4.addEventListener('click', function() {
    traco1.style.width = "8px";
    traco2.style.width = "8px";
    traco3.style.width = "8px";

});

