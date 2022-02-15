function verificar (){
    var txtnum = document.getElementById('txtnum');
    var txttab = document.getElementById('txttab');
    var txtres = document.getElementById('txtres')

    var numero = parseInt(txtnum.value);
    var multiplicar = '';

    if(txtnum.value.length == 0 ){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    }else{
        txttab.innerHTML = "";
        for(var mult = 1; mult <=10 ; mult++){
            // multiplicar += numero + "x" + mult + "=" + numero * mult + "<br/>";
            // txtres.innerHTML = multiplicar;

            multiplicar = numero + "x" + mult + "=" + numero * mult;

            var option = document.createElement("option");
            option.innerHTML = multiplicar;

            txttab.appendChild(option);
        }
    }

}