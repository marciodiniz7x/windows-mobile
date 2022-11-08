// Seletor de Elementos
const telaBlock = document.querySelector('.telaBlock');
const cadeado = document.querySelector('.cadeado');

///////////////////

// ------------------- //

// Script

cadeado.addEventListener('click', () => {
    telaBlock.classList.add('sumir');
})