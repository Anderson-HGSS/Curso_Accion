const mediaMin = 7.0;
const faltaMax = 20;
let botao = document.getElementById("btnMedia");
let media = document.getElementById("media");
let labelAprovacao = document.getElementById("aprovacao");

const notas = document.getElementsByName("nota");
const faltas = document.getElementsByName("falta");

function somaValores(lista){
    let media = 0;
    for(let elem of lista){
        media += Number(elem.value);
    }
    return media;
}

botao.addEventListener("click", function(){
    let mediaFinal = somaValores(notas) / notas.length;
    let totalFaltas = somaValores(faltas);

    media.value = mediaFinal;

    if(mediaFinal >= mediaMin && totalFaltas <= faltaMax){
        labelAprovacao.innerText = "Você foi aprovado!";
    }else{
        labelAprovacao.innerText = "Você foi reprovado!";
    }
})
