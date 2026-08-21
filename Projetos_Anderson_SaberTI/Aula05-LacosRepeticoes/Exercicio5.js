let cont1 = 0;

while(cont1 <=10){
    if (cont1 == 5){
        break;
    }
    console.log("WHILE: ", cont1)
    cont1++;
}

for(let i = 0; i <= 10; i++){
    if (i == 5){
        break;
    }
    console.log("FOR: ", i)
}

let cont2 = 0;

do{
    if (cont2 == 5){
        break;
    }
    console.log("DO WHILE: ", cont2)
    cont2++;

}while(cont2 <= 10);

