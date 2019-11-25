function contar(){
    let incio = document.querySelector('#inicio')
    let fim = document.querySelector('#fim')
    let passo = document.querySelector('#passo')
    let res = document.querySelector('#res')
    
    if(incio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
        alert('[EROO] Faltam dados')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(incio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            alert('Passo Invalido! Considerando passo 1')
            p = 1
        }
        if(i < f){
            //Contagem crescente
            for(let c=i;c <= f;c += p){
                res.innerHTML += `${c} \u{26AB} `
            }
        } else {
            //Contagem decrescente
            for(let c = i;c >= f; c -= p){
                res.innerHTML += `${c} \u{26AB} `
            }
        } 
        res.innerHTML += ` \u{1F3C1}`  
    }
        

}