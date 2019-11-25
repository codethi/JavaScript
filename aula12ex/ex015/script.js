function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')

    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Digite um ano válido!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        img.setAttribute('class','dimensoes')

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src','img/homemCrianca.jpg')
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src','img/homemJovem.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('srs','img/homemAdulto.jpg')
            }else{
                //Idoso
                img.setAttribute('src','img/homemIdoso.jpg')
            }

        } else {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src','img/mulherCrianca.jpg')
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src','img/mulherJovem.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src','img/mulherAdulta.jpg')
            }else{
                //Idoso
                img.setAttribute('src','img/mulherIdosa.jpg')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}