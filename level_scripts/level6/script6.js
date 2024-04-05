// A partir daqui não ofuscarei códigos caso precise fazer manutenção.
// Por favor, jogue de forma justa.
// se voce esta vendo isso, está perdendo a graça do enigma.
document.getElementById("enigmaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const respostaUsuario = document.getElementById("resposta").value.trim().toLowerCase();
    const respostaCorreta = "deus ex machina";
    const respostaDica = "deus";

    if (respostaUsuario === respostaDica){
        const divDica = document.querySelector(".dica");
        divDica.style.display = "block";
    }
  
    else if (respostaUsuario === respostaCorreta) {
      window.location.href = "../level7/7-9871qf3w.html";
    } else {
      alert("Resposta incorreta. Tente novamente.");
    }
  });
  