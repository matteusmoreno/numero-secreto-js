alert('Bem Vindo ao jogo do Número Secreto !');

let numeroMaximo = 10;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
console.log(numeroSecreto);
let tentativas = 0;
let resposta;

while (resposta != numeroSecreto) {
    let resposta = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (resposta == numeroSecreto) {
        tentativas ++;
        break;
    } else {
        if(resposta < numeroSecreto) {
            alert('O número é MAIOR');
            tentativas ++;
        } else if (resposta < 1 || resposta > numeroMaximo) {
            alert(`O número deve estar entre 1 e ${numeroMaximo}`);
        } else {
            tentativas ++;
            alert('O número é MENOR');
        }
    }
}

// operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns ! Você acertou com ${tentativas} ${palavraTentativa}.`);


