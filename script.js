
const apiUrl = 'http://localhost:8000'; // url de chamada da api

document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("itel");
    const keys = document.querySelectorAll(".key");
    const callButton = document.getElementById("call");
    const deleteButton = document.getElementById("delete");

        keys.forEach(key => {
            key.addEventListener("click", () => {
                itel.value += key.textContent;
            });
        });
        
        deleteButton.addEventListener("click", () => {
            itel.value = itel.value.slice(0, -1); //remove o ultimo caractere
        });

        callButton.addEventListener("click", () => {
            alert(`Ligando para ${itel.value}`);
            /*fetch(`${apiUrl}/call`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({phone: itel}),
              })*/
             
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

// Função para alterar a section
function alterarSection() {
    // Seleciona a section com id 'ckybd'
    const section = document.getElementById('ckybd');

    // Verifica se a section foi encontrada
    if (section) {
        // Altera o conteúdo ou estilo da section
        section.innerHTML = `
            <h1>Histórico de Chamadas</h1>
            <p>Aqui estão suas chamadas recentes...</p>
            <!-- Você pode adicionar mais conteúdo aqui -->
        `;
    }
}

// Adiciona um manipulador de eventos ao ícone com id 'recentes'
document.getElementById('recentes').addEventListener('click', alterarSection); 


// Função para exibir a seção com id 'ckybd' e ocultar outras seções
function mostrarTeclado() {
    // Seleciona a seção com id 'ckybd'
    const tecladoSection = document.getElementById('ckybd');
    
    // Verifica se a seção foi encontrada
    if (tecladoSection) {
        // Exibe a seção do teclado
        tecladoSection.style.display = 'block';
        
    
    }
}

// Adiciona um manipulador de eventos ao ícone com id 'recentes'
document.getElementById('teclado').addEventListener('click', mostrarTeclado); 
