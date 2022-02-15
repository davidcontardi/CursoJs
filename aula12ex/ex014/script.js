function carregar(){ //PARA ABRIR A FUNCTION, DEVE SE COLOCAR O ONLOAD NO BODY DO HTML
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = '#eed6b1'
    }else if (hora >= 12 && hora <= 18){
        //BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#cf7668'
    }else{
        //BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#9e7bb1'
    }
}
