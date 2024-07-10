
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
    if (imagemMic.src.includes("mic.png")){
        imagemMic.src = "icones/mic-mudo.png";
    } else {
        imagemMic.src = "icones/mic.png";
    } 
    }
