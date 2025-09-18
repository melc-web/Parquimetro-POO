//Função para exibir mensagens na tela
function exibirMensagem(texto) {
    const mensagemP = document.getElementById('mensagem');
    mensagemP.textContent = texto; //Limpa o texto
}

//Função principal da lógica do parquimetro
function calcularTempo() {
    const valorInput = document.getElementById('valorInput');
    const valor = parseFloat(valorInput.value);

    //Validação do valor 
    if (isNaN(valor) || valor < 1.00) {
        exibirMensagem('Valor insuficiente. O valor mínimo é de R$1,00');
        return;
    }

//Valores padrões que podem mudar conforme a resposta
let tempo = 0;
let troco = 0;

    //Aplicação das regras
    if (valor >= 3.00) {
        tempo = 120; //Tempo máximo
        troco = valor - 3.00;
        exibirMensagem(`Você tem direito a ${tempo} minutos de estacionamento. Seu troco é de R$ ${troco.toFixed(2)}.`);
    
    } else if (valor >= 1.75) {
        tempo = 60; 
        troco = valor - 1.75;
        exibirMensagem(`Você tem direito a ${tempo} minutos de estacionamento. Seu troco é de R$ ${troco.toFixed(2)}.`);
    
    } else if (valor >= 1.00) {
        tempo = 30; //Tempo mínimo
        troco = valor - 1.00;

        if (troco > 0) {
            exibirMensagem(`Você tem direito a ${tempo} minutos de estacionamento. Seu troco é de R$ ${troco.toFixed(2)}.`);
        } else {
            exibirMensagem(`Você tem direito a ${tempo} minutos de estacionamento.`);
        }
    
    } else {
        exibirMensagem('Valor de moedas não aceito. Por favor, insira R$1,00, R$1,75 ou R$3,00');
    }
}