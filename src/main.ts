import * as readline from 'readline';
import Calculo from './calculo';
import Mensagens from './mensagens';
import Multiplicacao from './multiplicacao';
import Soma from './soma';
import Subtracao from './subtracao';

let mensagens = new Mensagens()

let iniciar = () => {
  let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  leitor.question(`Quais são seus números e a operação desejada?\n`, (valor) => {
    let instrucoes = valor.split(' ')
    let numero1 = Number(instrucoes[0])
    let numero2 = Number(instrucoes[1])
    let operacao = instrucoes[2]
    if(instrucoes.length == 1){
      operacao = instrucoes[0]
    }
    console.log(`Estas foram suas instruções: ${instrucoes}\n`)

    let calculo: Calculo | null = null;

    switch (operacao) {
      case 'Somar':
        calculo = new Soma()
        break;
      case 'Subtrair':
        calculo = new Subtracao()
        break;
      case 'Multiplicar':
        calculo = new Multiplicacao()
        break;
      case 'Sair':
        console.log(`Até uma próxima, falou...`)
        break;
      default:
        console.log(`Operação não entendida :(`)
    }

    if (calculo) {
      console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
    }

    leitor.close()
    if (operacao != 'Sair') {
      mensagens.comoUsar()
      iniciar()
    }
  });
}
mensagens.boasVindas()
mensagens.listarOpcoes()
mensagens.comoUsar()
iniciar()