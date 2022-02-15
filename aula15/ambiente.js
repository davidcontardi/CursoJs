var num = [5, 8, 2, 9, 3];
num.push(0); //O método push adiciona valores a um array. Esse método é intencionalmente genérico. Podendo ser utilizado por call() ou apply() em objetos que implementam arrays.
num.sort(); // O método sort() ordena os elementos do próprio array e retorna o array. A ordenação não é necessariamente estável. A ordenação padrão é de acordo com a pontuação de código unicode.
console.log(num);
console.log(`O valor tem ${num.length} posições.`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
var pos = num.indexOf(8)
if(pos == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor está na posição ${pos}`)
}
