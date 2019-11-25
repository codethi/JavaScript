// Criação de um Array
let num = [5,8,2,9,3]

// Adicionar um valor na posição 5
num[5] = 5

// Adicionar um valor na ultima posição do Array 
num.push(1)

// Verificar o tamanho do meu Array
num.length

// Colocar todos os valores em ordem crescente
num.sort()

//console.log(num)
//console.log(num.length)
//console.log(num[0])


let pos = num.indexOf(4)
if(pos == -1){
   console.log('Valor não encontrado') 
} else {
    console.log(pos)
}

