let botao = document.getElementById("botao");
let resposta = document.getElementById("resposta");

function paridade(){
    let numero = parseInt(document.getElementById("numero").value);

    if(numero % 2 == 0){
        resposta.innerText = "O número é par!"
    }else{
        resposta.innerText = "O número é ímpar!"
    }
}

botao.addEventListener("click", paridade)