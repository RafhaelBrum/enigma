// se voce esta vendo isso, está perdendo a graça do enigma.
document.getElementById("enigmaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const respostaUsuario = document.getElementById("resposta").value.trim().toLowerCase();
    const respostaCorreta = "doce cereja";
    const respostaDica = "cereja";
  
    if (respostaUsuario === respostaDica){
        alert("Um pouco mais doce.")
    }
    else if (respostaUsuario === respostaCorreta) {
      window.location.href = "../level10/10-oingwsa.html";
    } else {
      alert("Resposta incorreta. Tente novamente.");
    }
  });
  