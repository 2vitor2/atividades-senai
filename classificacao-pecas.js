//info basica

var pesoRequirido = 100
console.log('O peso requirido das peças é: ' + pesoRequirido + 'grs.');
console.log(' ');

var peçaCapac = 10
console.log('A capacidade máxima de peças é: ' + peçaCapac);
console.log(' ');

var nomeDapeça = ['AB', 'Porca', 'Tampa', 'Filtro de Óleo', 'SP', 'AD', 'ER', 'IU', 'TRE', 'TI', 'RAR'];
console.log('As peças são: ' + nomeDapeça + '.');
console.log(' ');

var pesoDapeça = [20, 400, 300, 1, 200, 10, 5, 800, 8, 555, 9]

//----------------------------------------------------------------------------------------------------------

console.log('Peso da peça escolhida para a pesa-------------------------------------------------------------');

for (let index = 0; index<pesoDapeça.length; index++){
    if (pesoDapeça[index] <=100){
        console.log('A peça: ' +nomeDapeça[index] + '. Que possue: ' + pesoDapeça[index] + 'grs. Não foi aceita, pois não atingiu o peso requirido.');
        
    } else {
        console.log('A peça: ' +nomeDapeça[index] + '. Que possue: ' + pesoDapeça[index] + 'grs. Foi aceita.');
    }
}

//----------------------------------------------------------------------------------------------------------

console.log(' ')
console.log('Nome das peças---------------------------------------------------------------------------------');

for (let index = 0; index<nomeDapeça.length; index++){
    if (nomeDapeça[index].length <=3){
        console.log('A peça: ' +nomeDapeça[index] + '. Que possue: ' + nomeDapeça[index].length + ' caracteres. Não foi aceita, pois não atingiu o número de caracteres requirido.');
        
    } else {
        console.log('A peça: ' +nomeDapeça[index] + '. Que possue: ' + nomeDapeça[index].length + ' caracteres. Foi aceita.');
    }
}

//----------------------------------------------------------------------------------------------------------

console.log(' ');
console.log('Quantidade de peças----------------------------------------------------------------------------');

var peçaQuant = nomeDapeça.length

if (peçaQuant <= 10){
    console.log('A quantidade de peças alocadas é: ' + nomeDapeça.length + '. Quantidade aceita.');

    } else {
    console.log('A quantidade de peças alocadas é: ' + nomeDapeça.length + '. Quantidade excedida e não aceita.');
}

/*
var pesoAb = 20
var pesoPorca = 400
var pesoTampa = 300
var pesoFiltro = 1
var pesoSp = 200
var pesoAd = 10
var pesoEr = 5
var pesoIu = 800
var pesoTre = 8
var pesoTi = 555
var pesoRar = 9
*/

/* Pra testar umas coisinhas

let peso = 0
while(peso <= (tampaPeso)){
    console.log (peso);
    peso += 1;
}*/

//var nome = nomeDapeça[0]
//var pesoRequirido = pesoAb

//var peçaEscolhida = qualquerCoisa

/*
for(var peçaColocada =0; 
    peçaColocada<nomeDapeça[1++].length +peçaPesos[1++]; peçaColocada++){

    if(peçaPesos <=pesoRequirido){
        console.log('A ' +peçaColocada+ '° Peça colocada: ' +nomeDapeça+ '. Com o peso: ' +peçaPesos+ '. Não possue o peso Requirido.')
    }else{
        console.log ('A ' +peçaColocada+ '° Peça colocada: ' +nomeDapeça+ '. Com o peso: ' +peçaPesos+ '. Foi registrada com sucesso.')
    }
}
*/

/*
if(pesoRequirido >=100){
    
    console.log('A peça: ' + nome +'. Que pesa: ' + pesoRequirido + '. Foi registrada com sucesso.');

    } else {
        
    console.log('A peça: ' + nome +'. Que pesa: ' + pesoRequirido + '. Não possue o peso requerido.');
}
*/

/*
for(let peçaAtual =0; peçaAtual < nomeDapeça.length; peçaAtual++){
    
    var peçaEscolhida = nomeDapeça[0]
    
    if (peçaEscolhida.length <3){
        console.log('Erro. Peça: ' +nomeDapeça + 'poucos caracteres.')
    }else{
        console.log(nomeDapeça + ': tem caracteres suficiente.')
    }
}
*/

/*
for(let index = 0; index<peçaNome.lengh; index++){
    //console.log('a peça da posição' +index+ 'de nome' + peçaNome[index] + 'possui' +textoVetor.length + 'caracteres')

    var textoVetor = peçaNome[index]
    
    if (textoVetor.lengh <3){
        console.log('Erro. Peça :' + peçaNome[index] + 'poucos caracteres')
        
    } else{
        console.log(peçaNome[index] + ': tem caracteres suficiente')
    }
}

console.log(peçaNome[1].length)
*/