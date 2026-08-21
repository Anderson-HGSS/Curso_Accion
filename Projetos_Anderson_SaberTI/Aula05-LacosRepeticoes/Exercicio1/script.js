let btn = document.getElementById("botao");
let tabuada = document.getElementById("tabuada");

function criaTabuada(){
    tabuada.innerText = "";
    let num = document.getElementById("num").value;

    for(let i = 0; i <= 10; i++){
        
        let resultado = Number(num) * i
        tabuada.innerText += num + " * " + i + " = " + resultado + "\n";    
    }
    
}

btn.addEventListener("click", criaTabuada);