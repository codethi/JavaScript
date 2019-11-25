let valores = [2,8,6,9,3,7]
valores.sort()
/*
for(let pos = 0 ; pos < valores.length ; pos++){
    console.log(`A posição ${pos} tem: ${valores[pos]}`)
}
*/
// Maneira simplificada para percorrer meu vetor

for(let pos in valores){
    console.log(`A posição ${pos} tem: ${valores[pos]}`)
}
