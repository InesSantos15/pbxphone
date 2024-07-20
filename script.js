
document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const keys = document.querySelectorAll(".key");
    const callButton = document.getElementById("call");
    const deleteButton = document.getElementById("delete");

        keys.forEach(key => {
            key.addEventListener("click", () => {
                display.value += key.textContent;
            });
        });
        
        deleteButton.addEventListener("click", () => {
            display.value = display.value.slice(0, -1); //remove o ultimo caractere
        });

        callButton.addEventListener("click", () => {
            alert(`Ligando para ${display.value}`);
        });
})

/*alterar imagem do microfone*/ 
function trocarImagem(){ 

    let imagemMic = document.getElementById("mic");
    if (imagemMic.src.includes("microfone.png")){
        imagemMic.src = "icones/mic-mudo.png";
    } else {
        imagemMic.src = "icones/microfone.png";
    } 
}

function TrocarImagem(){

    let imagemSom = document.getElementById("som");
    if (imagemSom.src.includes("som.png")){
        imagemSom.src = "icones/som-mudo.png";
    } else {
        imagemSom.src = "icones/som.png";
    }


}
