let lista = [];


/**
 * retornar true caso elemeto exista na lista.
 * retornar false caso contrario
 * @param {lista} lista 
 * @param {numero} elemento 
 */
function existe(lista, elemento) {
    for (var i = 0; i < lista.length; i++) {
        var n = lista[i];

        if(parseInt(elemento) == n){
            return true;
        }
    }
    return false;
}

/**
 * Retorna o número de elementos que existem na lista
 * @param {lista} lista 
 */
function qtdeElementos(lista) {
    return lista.length;
}

/**
 * Retorna o maior valor encontrado em uma lista
 * @param {lista} lista 
 */
function maiorValor(lista) {
    // maiorValor([1, 6, 3 ,8])
    // maiorValor([])

    /*
        entrada = [5, 2, 7, 4]

        atual = 5

        para cada i entre 0 e 3 inclusive:
         - numero na posição i é maior do que o atual
         - se for maior que o atual, então encotramos o maior valor até agora

        i | num | atual
        0 | 5   | 5
        1 | 2   | 5
        2 | 7   | 7
        3 | 4   | 7

    */

    if (lista.length === 0) {
        return 0;
    }
    
    var maior = lista[0];

    for (var i = 0; i < lista.length; i++) {
        var num = lista[i];

        if (num > maior) {
            maior = num;
        }
    }

    return maior;
}

/**
 * Retorna o menos valor encontrado na lista
 * @param {lista} lista 
 */
function menorValor(lista){
    if(lista.length === 0){
        return 0;
    }

    var menor = lista[0];
    for(var i = 0; i < lista.length; i++){
        var num = lista[i];

        if(num < menor){
            menor = num;
        }
        return menor;
    }
}

/**
 * Retorna a soma de todos os valores da lista
 * @param {lista} lista 
 */
function soma(lista){
    var mais = 0;
    if(lista.length === 0){
        return 0;
    }
    for(var i = 0; i < lista.length; i++){
        mais += lista[i]
    }
    return mais;
}

/**
 * retorna a média de todos os valores da lista
 * @param {lista} lista 
 */
function media(lista){
    var mais = 0;
    if(lista.length === 0){
        return 0;
    }
    for(var i = 0; i < lista.length; i++){
        mais += lista[i];

        var med = mais / lista.length;
    }
    return med;
    
}

function add() {
 let num = document.getElementById('txtnum');
    if(num.value.length == 0 || existe(lista, num.value) || num.value <= 0 || num.value > 100){
        window.alert('Valor invalido ou já encontrado na lista');
    }
    else{
        let num1 = parseInt(num.value);
        lista.push(num1);
        let tab = document.getElementById('txttab');

        var option = document.createElement("option");   
        option.innerHTML = `Valor ${num1} adicionado`;
        tab.appendChild(option);    
    }
}
function fim(){
    let tab = document.getElementById('txttab');
    let res = document.getElementById('res');
    if(tab.value.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }

  res.innerHTML = `Ao todo temos ${qtdeElementos(lista)} números cadastrados. <br>
  O maior valor informado foi ${maiorValor(lista)}<br>
  O menor valor informado foi ${menorValor(lista)}<br>
  Somando todos os valores temos ${soma(lista)}<br>
  A média dos valores digitados é ${media(lista)}<br>
  
  `
//
/* */

}