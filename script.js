// Seletor de Elementos
const telaBlock = document.querySelector('.telaBlock');
const cadeado = document.querySelector('.cadeado');

const btnPower = document.querySelector('.btnPower');

///////////////////

// ------------------- //

// Script

cadeado.addEventListener('click', () => {
    telaBlock.classList.add('sumir');
})

btnPower.addEventListener('click', () => {
    telaBlock.classList.toggle('sumir');
})