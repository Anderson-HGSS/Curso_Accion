let botao = document.getElementById("botao");
let resposta = document.getElementById("resposta");

function calculaDesconto(){
    let valor = parseFloat(document.getElementById("valor").value);

    if(valor >= 100){
        let valorFinal = valor - (valor * 0.1)

        resposta.innerText = "O valor final de sua compra é R$" + valorFinal;
    }else{
        resposta.innerText = "O valor final de sua compra é R$" + valor;
    }
}

botao.addEventListener("click", calculaDesconto)