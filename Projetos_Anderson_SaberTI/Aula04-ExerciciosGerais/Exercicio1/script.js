let idades = document.getElementsByName("idade");
let mediaFinal = document.getElementById("mediaFinal");
let btn = document.getElementById("btnCalcular");

function calculaMedia() {
    let media = 0;
    for (let idade of idades) {
        media += parseInt(idade.value);
    }

    media = media / idades.length;
    return media;
}


function mostraMedia() {
    let media = calculaMedia();
    mediaFinal.value = media;
}

btn.addEventListener("click", mostraMedia);