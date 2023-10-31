function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var t = document.getElementById('titulo')
    
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora <12){
        t.innerHTML = 'Bom dia!!'
        img.src = 'https://images.pexels.com/photos/296234/pexels-photo-296234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    }else if (hora >=12 && hora<18){
        t.innerHTML = 'Boa tarde!!'
        document.body.style.background = 'darkorange'
        img.src = 'https://images.pexels.com/photos/2386144/pexels-photo-2386144.jpeg'   
    }else{
        t.innerHTML = 'Boa noite!!'
    document.body.style.background = 'darkgray'
        img.src = 'https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
}