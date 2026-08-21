let contagem = document.getElementById("contagem");
let botao = document.getElementById("btn");

function contar(){
    let min = Number(document.getElementById("min").value);
    let max = Number(document.getElementById("max").value);
    let contador = max;

    while(contador >= min){
        contagem.innerText += "\n" + contador;
        contador--;
    }
}

btn.addEventListener("click", contar);