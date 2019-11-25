function carregar(){
var msg = document.querySelector('#msg')
var img = document.querySelector('#imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 19
var min = data.getMinutes()



msg.innerHTML = `Agora são ${hora}h e ${min}min`

if (hora >= 0 && hora < 12){
    img.src = 'img/fotoManhã.jpg'
    document.body.style.background = '#fee9b1'
} else if(hora >=  12 && hora <= 18){
    img.src = 'img/fotoTarde.jpg'
    document.body.style.background = '#e8a66c'
}else {
    img.src = 'img/fotoNoite.jpg'
    document.body.style.background = '#271c35'
}
}