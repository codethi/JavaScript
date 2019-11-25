function gerar(){
    let numero = document.querySelector('#numero')
    let tab = document.querySelector('#seltab')

    if(numero.value.length == 0){
        alert('[ERRO] Digite um número')
    } else {
        let n = Number(numero.value)
        tab.innerHTML = ''
        for(let c = 1 ; c <= 10 ; c++){
            let r = c * n
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${r}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }

    
}