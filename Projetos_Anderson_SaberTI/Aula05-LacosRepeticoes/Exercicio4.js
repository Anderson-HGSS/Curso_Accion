
// Faça uma contagem nos 3 tipos de laços começando em 0 (zero) 
// e terminando em 10 (dez) mostrando na tela mensagens 
// somente com os números impares.

let imparesWhile = [];
let imparesFor = [];
let imparesDoWhile = [];

let cont1 = 0;

while(cont1 <=10){
    if (cont1 % 2 != 0){
        imparesWhile.push(cont1);
    }
    cont1++;
}

for(let i = 0; i <= 10; i++){
    if (i % 2 != 0){
        imparesFor.push(i);
    }
}

let cont2 = 0;

do{
    if (cont2 % 2 != 0){
        imparesDoWhile.push(cont2);
    }
    cont2++;
}while(cont2 <= 10);

console.log("Os valores ímpares usando 'While': " + imparesWhile);
console.log("Os valores ímpares usando 'for': " + imparesFor);
console.log("Os valores ímpares usando 'Do While': " + imparesDoWhile);