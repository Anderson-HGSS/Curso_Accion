let botao = document.getElementById("botao");
let resposta = document.getElementById("resposta");

function aprovacao(){
    let nota = parseFloat(document.getElementById("nota").value);

    if(nota >= 7.0){
        resposta.innerText = "Você foi aprovado!"
    }
    else if(nota<5.0){
        resposta.innerText = "Você foi reprovado!"
    }
    else{
        resposta.innerText = "Você está de recuperação!"
    }
}