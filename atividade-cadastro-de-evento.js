console.log(' ');

//variaveis

var aPessoaé = 'Participante'
var dataAtual = 15092021
var idade = 20

var dataMax = 16092021
var idadeMax = 18
var participMax = 100
var participReg = 80

//-Primeiro deve verificar a questão da data do evento .Se isso estiver "ok" pode iniciar o cadastro dos participantes ou palestrantes.

console.log('Por favor, aguarde enquanto vemos a data atual.');

if(dataAtual<=dataMax){    
        console.log('A data atual é válida. Fique atento, o dia limite do evento é até dia 16/09/2021 - 00:00. Cadastre-se o quanto antes.'); 

    }else{
        console.log('Este evento não está mais disponível! O evento ocorreu dia 16/09/2021. Procure se atualizar mais vezes para não perder mais nenhum evento!');
    return
}

console.log(' ');
console.log('-----------------------------------------------------------------------------------------------------------------------');

//-Verificar a idade do cadastrado.

console.log('Por favor, digite sua idade: ' + idade);
console.log(' ');

if(idade>=idadeMax){
        console.log('Idade válida.');

    }else{
        console.log('Idade inválida. Menores de 18 anos não podem participar do evento!');
    return
}

//-Verificar se é um participante ou palestrante que está sendo cadastrado.

console.log(' ');
console.log('-----------------------------------------------------------------------------------------------------------------------');
console.log('Diga-nos o que será no evento: ' + aPessoaé);
console.log(' ');

if(aPessoaé ==='Participante'){
    console.log('Olá, participante! Vamos ver se temos vagas para você no evento!')

    }else{ 
        console.log('Olá, palestrante! Vamos ver se temos vagas para você no evento!')
    
}

//-Verificar se é possível cadastrar mais participantes já que existe um limite por evento.

console.log(' ');
console.log('-----------------------------------------------------------------------------------------------------------------------');
console.log('O limite de participantes no evento é 100 participantes.')
console.log(' ')
console.log('Aguarde enquanto estamos calculando o número de participantes atualmente registrados no evento...')
console.log(' ')

for(let numAtual = 0; numAtual<=100; numAtual++){
    if(numAtual = participReg){
        console.log('O número de participantes registrados é ' + numAtual + '. Temos vaga para você.'); 

    }else{
        console.log('O número de participantes registrados é ' + numAtual + '. Infelizmente não temos mais vagas para você. Procure se atualizar mais vezes para não perder mais nenhum evento!');
        return
    }
}

//-A cada Participante ou Palestrante cadastrado eu devo contabilizar . Será baseado nisso que você poderá fazer o controle citado no tópico anterior.



//-Quando o usuário não quiser mais cadastrar novos participantes ou palestrantes, permitir que ele encerre o cadastro do evento.  (é uma ideia opcional para que o usuário não precise sempre cadastrar 100 participantes para finalizar).



//-Listar todos participantes e palestrantes cadastrados no evento. (Esse caso pode ser apenas informando essa ação).
