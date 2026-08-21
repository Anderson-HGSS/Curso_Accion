let pares = [];
let contador = 0;

while(pares.length < 3){
    contador++;
    if(contador%2 ==0){
        pares.push(contador);
    }
}

console.log(pares);