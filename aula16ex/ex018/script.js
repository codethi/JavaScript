let num = document.querySelector('#numero')
let lista = document.querySelector('#listaNum')
let res = document.querySelector('#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){ 
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('[ERRO] Valor invalido ou já inserido!')
    } 

    num.value = ''
    num.focus()
}

function finalizar(){

    if (valores.length == 0){
        alert ('[ERRO] Adicione valores a lista!')
    } else {
        let tot = valores.length     
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
           if(valores[pos] > maior)
            maior = valores[pos]
           if(valores[pos] < menor)
           menor = valores[pos]  
        }

        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior número é ${maior}</p>`
        res.innerHTML += `<p>O menor número é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    
    }


}

