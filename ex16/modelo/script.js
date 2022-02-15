function verificar(){
    var txtini   = document.getElementById('txtinicio');
    var txtfim   = document.getElementById('txtfim');
    var txtpasso = document.getElementById('txtpasso');
    var txtres   = document.getElementById('txtres');

    var inicio    = parseInt(txtini.value);
    var soma      = inicio;
    var fim       = parseInt(txtfim.value);
    var passo     = parseInt(txtpasso.value);
    var resultado = "";

    console.log(typeof soma);

    if (inicio == 0 || fim == 0) {
        txtres.innerHTML = 'Impossível contar!';
    } else {
        if (passo <= 0) {
            window.alert('Passo invalido. Considerando PASSO 1');
            passo = 1;
        }
        if(inicio > fim && passo > 0){
            window.alert('Erro! Soma não pode ser maior que fim, enquanto passo for menor que zero!')
        }else{
            while(soma <= fim) {
                soma = soma + passo;
                resultado = resultado + "👉 " + soma;
                console.log(resultado);
                txtres.innerHTML = 'Contando: ' + resultado + "🏁";
            }
        }
    }
}