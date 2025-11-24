function mostrarNome(nome) {
    console.log(`Olá, ${nome}`);
}

mostrarNome('Nicole');

function calcularQuadrado(numero) {
    return (numero * numero);

}

let resultado = calcularQuadrado(5);
console.log(resultado);


let titulo = document.querySelector('h1');
titulo.innerHTML = ('Hora do desafio');

function verificarConsole() {
    console.log('O botão console foi clicado');
}

function euAmoJs() {
    alert('Eu amo JS!');
}

let cidade;

function nomeCidade() {
   cidade = prompt('Diga o nome de uma cidade do Brasil');
   alert(`Estive em ${cidade} e lembrei de você`);

}


function soma() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`O resultado da soma é ${resultado}`)

}


