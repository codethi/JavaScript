function parimp(n){
    if (n % 2 == 0){
        return 'Par' //Retorno (Uma função em Js só pode ter 1 retorno)
    } else {
        return 'Impar' // Retorno
    }
}   

let res = parimp(5) // Chamada

console.log(res)